import * as actionTypes from 'src/redux/actionTypes/projects.actionTypes';

export const storeProjectsAction = data => dispatch => {
    dispatch({
        type: actionTypes.STORE_PROJECTS,
        payload: {
            data,
        },
    });
};

export const addProjectAction = data => dispatch => {
    dispatch({
        type: actionTypes.ADD_PROJECT,
        payload: {
            data,
        },
    });
};
