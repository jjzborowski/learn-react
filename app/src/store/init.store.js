import { elementsListInitAction } from 'src/actions/elementsList.actions';
import { elementsListDummy } from 'src/dummies/elementsList.dummy';
import store from 'src/store/store';

export const initStore = () => {
    store.dispatch(elementsListInitAction(elementsListDummy));
};
