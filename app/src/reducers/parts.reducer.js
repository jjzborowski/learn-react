import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actionTypes from 'src/actionTypes/parts.actionTypes';

const listDataReducer = handleActions({
    [actionTypes.PARTS_LIST_INIT]: (state, { payload }) => payload.data,
    [actionTypes.PARTS_LIST_ADD]: (state, { payload }) => (
        {
            ...state,
            [payload.data.id]: payload.data,
        }
    ),
}, {});

const partsReducer = combineReducers({
    data: listDataReducer,
});

export default partsReducer;