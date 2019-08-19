import * as actionTypes from 'src/actionTypes/modal.actionTypes';

export const modalDisplayAction = content => dispatch => {
    dispatch({
        type: actionTypes.MODAL_DISPLAY,
        payload: {
            content,
        },
    });
};

export const modalHideAction = () => dispatch => {
    dispatch({
        type: actionTypes.MODAL_HIDE,
    });
};
