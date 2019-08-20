import * as modalActionTypes from 'src/actionTypes/modal.actionTypes';
import * as actionTypes from 'src/actionTypes/parts.actionTypes';

export const partsListInitAction = data => dispatch => {
    dispatch({
        type: actionTypes.PARTS_LIST_INIT,
        payload: {
            data,
        },
    });
};

export const partsListAddAction = data => dispatch => {
    dispatch({
        type: actionTypes.PARTS_LIST_ADD,
        payload: {
            data,
        },
    });
    dispatch({
        type: modalActionTypes.MODAL_HIDE,
    });
};
