import * as actionTypes from 'src/redux/actionTypes/parts.actionTypes';

export const storePartsAction = partsData => dispatch => {
    dispatch({
        type: actionTypes.STORE_PARTS,
        partsData,
    });
};

export const addPartAction = partData => dispatch => {
    dispatch({
        type: actionTypes.ADD_PART,
        partData,
    });
};

export const removePartAction = partId => (dispatch, getState) => {
    const state = getState();
    const partsData = {...state.parts.data};

    delete partsData[partId];

    dispatch({
        type: actionTypes.REMOVE_PART,
        partsData,
    });
};
