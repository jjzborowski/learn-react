import Home from 'src/pages/Home/Home';
import Inventory from 'src/pages/Inventory/Inventory';
import Projects from 'src/pages/Projects/Projects';

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
        component: Projects,
    },
];

export default menu;