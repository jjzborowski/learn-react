import { createStore } from 'redux';

import rootReducer from 'src/reducers/root.reducer';
import middleware from './middleware';

const rootState = {};

const store = createStore(
    rootReducer,
    rootState,
    middleware,
);

export default store;