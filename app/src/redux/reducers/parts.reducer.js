import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actionTypes from 'src/redux/actionTypes/parts.actionTypes';

const listDataReducer = handleActions({
    [actionTypes.STORE_PARTS]: (state, { payload }) => payload.data,
    [actionTypes.ADD_PART]: (state, { payload }) => (
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