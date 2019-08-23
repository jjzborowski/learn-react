import partsListDummy from 'src/dummies/partsList.dummy';
import projectsListDummy from 'src/dummies/projectsList.dummy';
import { storePartsAction } from 'src/redux/actions/parts.actions';
import { storeProjectsAction } from 'src/redux/actions/projects.actions';
import store from 'src/redux/store/store';

export const initStore = () => {
    store.dispatch(storePartsAction(partsListDummy));
    store.dispatch(storeProjectsAction(projectsListDummy));
};
