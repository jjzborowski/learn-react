import { combineReducers } from 'redux';
import menuReducer from 'src/redux/reducers/menu.reducer';
import partsReducer from 'src/redux/reducers/parts.reducer';
import projectsReducer from 'src/redux/reducers/projects.reducer';

const rootReducer = combineReducers({
    parts: partsReducer,
    menu: menuReducer,
    projects: projectsReducer,
});

export default rootReducer;