import React from 'react';
import { Route } from 'react-router-dom';

import Home from 'src/components/Home/Home';
import List from 'src/components/List/List';

const Routes = () => {
    return (
        <div>
            <Route
                path="/"
                exact
                component={ Home }
            />
            <Route
                path="/list"
                component={ List }
            />
        </div>
    );
};

export default Routes;