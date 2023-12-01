import { createReducer } from 'redux-act';

import {
  requestSearchSpotify,
  setSearchResult,
} from './spotifyActions';

export interface SpotifyImage {
  height: number,
  width: number,
  url: String,
}

export interface Followers {
  total: number;
}

export interface ArtistItem {
  followers: Followers;
  genres: string[];
  images: SpotifyImage[];
  name: String;
}

export interface Artist {
  name: String;
  items: ArtistItem[];
}

export interface AlbumItem {
  artists: Artist[];
  images: SpotifyImage[];
  name: String;
  release_date: String;
}

export interface Album {
  items: AlbumItem[];
}

export interface TrackItem {
  album: AlbumItem[];
  artists: Artist[];
  name: String;
}

export interface Track {
  items: TrackItem[];
}

export interface Results {
  albums: Album[];
  artists: Artist[];
  tracks: Track[]
}

interface SpotifyState {
  isLoading: Boolean,
  results?: Results
}

const initialState: SpotifyState = {
  isLoading: false,
};

const reducer = createReducer({}, initialState);

reducer.on(requestSearchSpotify, (state) => ({
  ...state,
  isLoading: true,
}));

reducer.on(setSearchResult, (state, results: Results) => ({
  ...state,
  isLoading: false,
  results,
}));


export default reducer;