import * as actionTypes from 'src/redux/actionTypes/projects.actionTypes';

export const storeProjectsAction = projectsData => dispatch => {
    dispatch({
        type: actionTypes.STORE_PROJECTS,
        projectsData,
    });
};

export const addProjectAction = projectData => dispatch => {
    dispatch({
        type: actionTypes.ADD_PROJECT,
        projectData,
    });
};

export const removeProjectAction = projectId => (dispatch, getState) => {
    const state = getState();
    const projectsData = {...state.projects.data};

    delete projectsData[projectId];

    dispatch({
        type: actionTypes.REMOVE_PROJECT,
        projectsData,
    });
};
