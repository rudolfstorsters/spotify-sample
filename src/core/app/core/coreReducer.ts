import { createReducer } from 'redux-act';

interface CoreState { }

const initialState: CoreState = {
};

const reducer = createReducer({}, initialState);

export default reducer;