import * as actionTypes from 'src/actionTypes/list.actionTypes';

export const listInitAction = data => dispatch => {
    dispatch({
        type: actionTypes.LIST_INIT,
        payload: {
            data,
        }
    });
};
