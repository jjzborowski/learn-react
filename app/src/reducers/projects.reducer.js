import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actionTypes from 'src/actionTypes/projects.actionTypes';

const listDataReducer = handleActions({
    [actionTypes.PROJECTS_LIST_INIT]: (state, { payload }) => payload.data,
    [actionTypes.PROJECTS_LIST_ADD]: (state, { payload }) => (
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