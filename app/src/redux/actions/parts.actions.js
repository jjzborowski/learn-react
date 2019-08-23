import * as actionTypes from 'src/redux/actionTypes/parts.actionTypes';

export const storePartsAction = data => dispatch => {
    dispatch({
        type: actionTypes.STORE_PARTS,
        payload: {
            data,
        },
    });
};

export const addPartAction = data => dispatch => {
    dispatch({
        type: actionTypes.ADD_PART,
        payload: {
            data,
        },
    });
};
