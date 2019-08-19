import React from 'react';
import { Route } from 'react-router-dom';
import menu from 'src/constants/menu';

const Routes = () => menu.map(route => (
    <Route
        key={ route.id }
        path={ route.path }
        exact
        component={ route.component }
    />
));

export default Routes;