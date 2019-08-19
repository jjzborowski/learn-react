import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actionTypes from 'src/actionTypes/elementsList.actionTypes';

const listDataReducer = handleActions({
    [actionTypes.ELEMENTS_LIST_INIT]: (state, { payload }) => payload.data,
    [actionTypes.ELEMENTS_LIST_ADD]: (state, { payload }) => {
        console.log(state);
        console.log(payload);
        return {
            ...state,
            [payload.data.id]: payload.data,
        };
    },
}, {});

const elementsListReducer = combineReducers({
    data: listDataReducer,
});

export default elementsListReducer;