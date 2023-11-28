import { createReducer } from 'redux-act';

import {
  startApp,
} from './coreActions';

interface SpotifyState { }

const initialState: SpotifyState = {
};

const reducer = createReducer({}, initialState);

export default reducer;