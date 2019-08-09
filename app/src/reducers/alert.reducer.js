import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import * as actionTypes from 'src/actionTypes/alert.actionTypes';

const alertDisplayReducer = handleActions({
    [actionTypes.ALERT_DISPLAY_MESSAGE]: () => true,
    [actionTypes.ALERT_HIDE_MESSAGE]: () => false,
}, false);

const alertMessageReducer = handleActions({
    [actionTypes.ALERT_DISPLAY_MESSAGE]: (state, { payload }) => payload.message
}, '');

const alertTypeReducer = handleActions({
    [actionTypes.ALERT_DISPLAY_MESSAGE]: (state, { payload }) => payload.type,
}, '');

const alertReducer = combineReducers({
    display: alertDisplayReducer,
    message: alertMessageReducer,
    type: alertTypeReducer,
});

export default alertReducer;