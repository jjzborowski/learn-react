import { handleActions } from 'redux-actions';

import * as actionTypes from 'src/redux/actionTypes/menu.actionTypes';

const menuReducer = handleActions({
    [actionTypes.MENU_INIT]: (state, { payload }) => payload.data,
}, {});

export default menuReducer;