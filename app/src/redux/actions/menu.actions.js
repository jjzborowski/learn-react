import * as actionTypes from 'src/redux/actionTypes/menu.actionTypes';

export const menuInitAction = data => dispatch => {
    dispatch({
        type: actionTypes.MENU_INIT,
        payload: {
            data,
        },
    });
};
