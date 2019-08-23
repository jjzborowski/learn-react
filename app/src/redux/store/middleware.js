import {
    applyMiddleware,
    compose,
} from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const middlewares = [
    thunk,
    createLogger({ collapsed: true }),
];

const enhancers = [];
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(window.window.__REDUX_DEVTOOLS_EXTENSION__());
}

const middleware = compose(
    applyMiddleware(...middlewares),
    ...enhancers,
);

export default middleware;