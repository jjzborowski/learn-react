import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actionTypes from 'src/actionTypes/list.actionTypes';

const listDataReducer = handleActions({
    [actionTypes.LIST_INIT]: (state, { payload }) => payload.data,
}, {});

const listReducer = combineReducers({
    data: listDataReducer,
});

export default listReducer;