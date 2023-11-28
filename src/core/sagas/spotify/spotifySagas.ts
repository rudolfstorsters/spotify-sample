import {
    all,
    takeEvery
} from 'redux-saga/effects'

import * as spotifyActions from '../../app/spotify/spotifyActions'
import * as coreActions from '../../app/core/coreActions'

function* handleStartApp() {
    // Fetch spotify data
}

export default function* spotifySagas() {
    yield all([
        takeEvery(coreActions.startApp, handleStartApp)
    ])
}