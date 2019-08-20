import { combineReducers } from 'redux';

import alertReducer from 'src/reducers/alert.reducer';
import menuReducer from 'src/reducers/menu.reducer';
import modalReducer from 'src/reducers/modal.reducer';
import partsReducer from 'src/reducers/parts.reducer';
import projectsReducer from 'src/reducers/projects.reducer';

const rootReducer = combineReducers({
    alert: alertReducer,
    parts: partsReducer,
    menu: menuReducer,
    modal: modalReducer,
    projects: projectsReducer,
});

export default rootReducer;