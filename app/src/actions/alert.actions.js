export const ALERT_HIDE = 'ALERT_HIDE';
export const ALERT_DISPLAY = 'ALERT_DISPLAY';

export const alertDisplayAction = (type, content) => dispatch => {
    dispatch({
        type: actionTypes.ALERT_DISPLAY,
        payload: {
            content,
            type,
        },
    });
};

export const alertHideAction = () => dispatch => {
    dispatch({
        type: actionTypes.ALERT_HIDE,
    });
};


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

export const getAlert = state => state.alert;
export const getAlertDisplay = state => getAlert(state).display;
export const getAlertContent = state => getAlert(state).content;
export const getAlertType = state => getAlert(state).type;