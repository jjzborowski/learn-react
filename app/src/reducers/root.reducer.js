import { combineReducers } from 'redux';

import alertReducer from 'src/reducers/alert.reducer';
import listReducer from 'src/reducers/list.reducer';
import menuReducer from 'src/reducers/menu.reducer';

const rootReducer = combineReducers({
    alert: alertReducer,
    list: listReducer,
    menu: menuReducer,
});

export default rootReducer;