import Home from 'src/components/Home/Home';
import Inventory from 'src/components/Inventory/Inventory';
import ProjectsList from 'src/components/ProjectsList/ProjectsList';

const menu = [
    {
        id: 0,
        label: 'Main page',
        path: '/',
        component: Home,
    },
    {
        id: 1,
        label: 'Inventory',
        path: '/inventory',
        component: Inventory,
    },
    {
        id: 2,
        label: 'Projects',
        path: '/projects',
        component: ProjectsList,
    },
];

export default menu;