import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actionTypes from 'src/redux/actionTypes/parts.actionTypes';

const listDataReducer = handleActions({
    [actionTypes.STORE_PARTS]: (state, { partsData }) => partsData,
    [actionTypes.ADD_PART]: (state, { partData }) => (
        {
            ...state,
            [partData.id]: partData,
        }
    ),
    [actionTypes.REMOVE_PART]: (state, { partsData }) => partsData,
}, {});

const partsReducer = combineReducers({
    data: listDataReducer,
});

export default partsReducer;