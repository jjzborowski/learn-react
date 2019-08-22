import * as actionTypes from 'src/actionTypes/menu.actionTypes';

export const menuInitAction = data => dispatch => {
    dispatch({
        type: actionTypes.MENU_INIT,
        payload: {
            data,
        },
    });
};
