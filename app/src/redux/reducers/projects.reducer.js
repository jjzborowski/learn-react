import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actionTypes from 'src/redux/actionTypes/projects.actionTypes';

const listDataReducer = handleActions({
    [actionTypes.STORE_PROJECTS]: (state, { projectsData }) => projectsData,
    [actionTypes.ADD_PROJECT]: (state, { projectData }) => (
        {
            ...state,
            [projectData.id]: projectData,
        }
    ),
    [actionTypes.REMOVE_PROJECT]: (state, { projectsData }) => projectsData,
}, {});

const projectsReducer = combineReducers({
    data: listDataReducer,
});

export default projectsReducer;