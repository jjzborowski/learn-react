import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actionTypes from 'src/redux/actionTypes/projects.actionTypes';

const listDataReducer = handleActions({
    [actionTypes.STORE_PROJECTS]: (state, { payload }) => payload.data,
    [actionTypes.ADD_PROJECT]: (state, { payload }) => (
        {
            ...state,
            [payload.data.id]: payload.data,
        }
    ),
}, {});

const projectsReducer = combineReducers({
    data: listDataReducer,
});

export default projectsReducer;