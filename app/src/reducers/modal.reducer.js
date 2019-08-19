import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import * as actionTypes from 'src/actionTypes/modal.actionTypes';

const modalDisplayReducer = handleActions({
    [actionTypes.MODAL_DISPLAY]: () => true,
    [actionTypes.MODAL_HIDE]: () => false,
}, false);

const modalContentReducer = handleActions({
    [actionTypes.MODAL_DISPLAY]: (state, { payload }) => payload.content,
    [actionTypes.MODAL_HIDE]: () => null,
}, null);

const modalReducer = combineReducers({
    display: modalDisplayReducer,
    content: modalContentReducer,
});

export default modalReducer;