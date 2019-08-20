import { partsListInitAction } from 'src/actions/parts.actions';
import { projectsListInitAction } from 'src/actions/projects.actions';
import { partsListDummy } from 'src/dummies/partsList.dummy';
import { projectsListDummy } from 'src/dummies/projectsList.dummy';
import store from 'src/store/store';

export const initStore = () => {
    store.dispatch(partsListInitAction(partsListDummy));
    store.dispatch(projectsListInitAction(projectsListDummy));
};
