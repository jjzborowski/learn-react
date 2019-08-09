import * as actionTypes from 'src/actionTypes/alert.actionTypes';

export const alertHideMessageAction = () => dispatch => {
    dispatch({
        type: actionTypes.ALERT_HIDE_MESSAGE,
    });
};

export const alertDisplayMessageAction = (type, message) => dispatch => {
    dispatch({
        type: actionTypes.ALERT_DISPLAY_MESSAGE,
        payload: {
            message,
            type,
        },
    });
};
