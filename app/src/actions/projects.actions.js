import * as actionTypes from 'src/actionTypes/projects.actionTypes';

export const projectsListInitAction = data => dispatch => {
    dispatch({
        type: actionTypes.PROJECTS_LIST_INIT,
        payload: {
            data,
        },
    });
};

export const projectsListAddAction = data => dispatch => {
    dispatch({
        type: actionTypes.PROJECTS_LIST_ADD,
        payload: {
            data,
        },
    });
};
