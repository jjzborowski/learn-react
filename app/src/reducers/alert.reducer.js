import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import * as actionTypes from 'src/actionTypes/alert.actionTypes';

const alertDisplayReducer = handleActions({
    [actionTypes.ALERT_DISPLAY]: () => true,
    [actionTypes.ALERT_HIDE]: () => false,
}, false);

const alertContentReducer = handleActions({
    [actionTypes.ALERT_DISPLAY]: (state, { payload }) => payload.content,
}, '');

const alertTypeReducer = handleActions({
    [actionTypes.ALERT_DISPLAY]: (state, { payload }) => payload.type,
}, '');

const alertReducer = combineReducers({
    display: alertDisplayReducer,
    content: alertContentReducer,
    type: alertTypeReducer,
});

export default alertReducer;