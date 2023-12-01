import { createAction } from 'redux-act';

export const requestSearchSpotify = createAction<String>('V/spotify/REQUEST_SEARCH');
export const setSearchResult = createAction<any>('V/spotify/SET_SEARCH_RESULT')
