import { listInitAction } from 'src/actions/list.actions';
import { menuInitAction } from 'src/actions/menu.actions';
import { listDummy } from 'src/dummies/list.dummy';
import { menuDummy } from 'src/dummies/menu.dummy';
import store from 'src/store/store';

export const initStore = () => {
    store.dispatch(menuInitAction(menuDummy));
    store.dispatch(listInitAction(listDummy));
};
