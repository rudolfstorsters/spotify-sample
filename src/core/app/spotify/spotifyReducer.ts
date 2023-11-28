import { createReducer } from 'redux-act';

import {
  helloWorld,
} from './spotifyActions';

interface SpotifyState {
}

const initialState: SpotifyState = {
};

const reducer = createReducer({}, initialState);

reducer.on(helloWorld, (state) => ({
  ...state,
}));


export default reducer;