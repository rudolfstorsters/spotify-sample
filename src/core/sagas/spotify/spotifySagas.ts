import {
    all,
    call,
    put,
    takeEvery
} from 'redux-saga/effects'

import * as spotifyActions from '../../app/spotify/spotifyActions'
import * as coreActions from '../../app/core/coreActions'

enum CallStatus {
    SUCCESS = "SUCCESS",
    ERROR = "ERROR",
}
interface FetchResult {
    type: CallStatus;
    data?: any;
}

var client_id = "[CLIENT_ID]";
var client_secret = "[CLIENT_SECRET]";

async function fetchToken() {
    const res = await fetch('https://accounts.spotify.com/api/token', {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
        method: "POST"
    });
    const resJson = await res.json()

    return {
        type: res.ok ? CallStatus.SUCCESS : CallStatus.ERROR,
        data: resJson,
    };
}

async function getToken() {
    try {
        const tokenData = JSON.parse(localStorage.tokenData ?? "");
        if (tokenData?.access_token) {
            if (tokenData.expiration > Date.now()) {
                // We have a valid token
                return tokenData.access_token
            }
        }
    } catch (err) { }

    // Acquire new token
    const newToken = (await fetchToken()).data;
    newToken.expiration = Date.now() + (newToken.expires_in * 1000)
    localStorage.setItem("tokenData", JSON.stringify(newToken));

    return newToken.access_token;
}

async function fetchWebApi(endpoint: String, method: string, body: any): Promise<FetchResult> {
    const token = await getToken()
    const params: any = {
        headers: {
            "Authorization": `Bearer ${token}`,
        },
        method,
    }
    var urlParams = ""
    if (method == "POST") {
        params['body'] = JSON.stringify(body)
    } else {
        urlParams = `?${new URLSearchParams(body).toString()}`
    }
    const res = await fetch(`https://api.spotify.com/${endpoint}${urlParams}`, params);
    const resJson = await res.json();

    return {
        type: res.ok ? CallStatus.SUCCESS : CallStatus.ERROR,
        data: resJson,
    };

}

function* handleStartApp() {
}

function* handleRequestSearch({ payload }: { payload: String }) {
    try {
        const response: FetchResult = yield call(fetchWebApi, "v1/search", "GET", {
            q: payload,
            type: "album,artist,track",
        })
        if (response.type === CallStatus.SUCCESS) {
            yield put(spotifyActions.setSearchResult(response.data));
        }
    } catch (err) {
        console.error(err);
    }
}

export default function* spotifySagas() {
    yield all([
        takeEvery(coreActions.startApp, handleStartApp),
        takeEvery(spotifyActions.requestSearchSpotify, handleRequestSearch)
    ])
}