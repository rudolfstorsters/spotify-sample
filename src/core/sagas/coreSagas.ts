import {
    all, fork, takeEvery
} from 'redux-saga/effects'

import spotifySagas from './spotify/spotifySagas'

import * as coreActions from '../app/core/coreActions'

export function* handleStartApp() {

}

export default function* coreSagas() {
    yield all([
        fork(spotifySagas),
        takeEvery(coreActions.startApp, handleStartApp)
    ])
}