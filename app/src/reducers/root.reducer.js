import { combineReducers } from 'redux';

import alertReducer from 'src/reducers/alert.reducer';
import elementsListReducer from 'src/reducers/elementsList.reducer';
import menuReducer from 'src/reducers/menu.reducer';
import modalReducer from 'src/reducers/modal.reducer';

const rootReducer = combineReducers({
    alert: alertReducer,
    list: elementsListReducer,
    menu: menuReducer,
    modal: modalReducer,
});

export default rootReducer;