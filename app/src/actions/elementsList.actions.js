import * as actionTypes from 'src/actionTypes/elementsList.actionTypes';
import * as modalActionTypes from 'src/actionTypes/modal.actionTypes';

export const elementsListInitAction = data => dispatch => {
    dispatch({
        type: actionTypes.ELEMENTS_LIST_INIT,
        payload: {
            data,
        },
    });
};

export const elementsListAddAction = data => dispatch => {
    dispatch({
        type: actionTypes.ELEMENTS_LIST_ADD,
        payload: {
            data,
        },
    });
    dispatch({
        type: modalActionTypes.MODAL_HIDE,
    });
};
