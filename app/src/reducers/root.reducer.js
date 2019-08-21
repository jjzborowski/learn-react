import { combineReducers } from 'redux';

import alertReducer from 'src/reducers/alert.reducer';
import menuReducer from 'src/reducers/menu.reducer';
import partsReducer from 'src/reducers/parts.reducer';
import projectsReducer from 'src/reducers/projects.reducer';

const rootReducer = combineReducers({
    alert: alertReducer,
    parts: partsReducer,
    menu: menuReducer,
    projects: projectsReducer,
});

export default rootReducer;