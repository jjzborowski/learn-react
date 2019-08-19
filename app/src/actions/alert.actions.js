import * as actionTypes from 'src/actionTypes/alert.actionTypes';

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
