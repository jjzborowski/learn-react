import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppContainer from 'src/components/AppContainer/AppContainer';
import { initStore } from 'src/store/init.store';
import store from 'src/store/store';
import './App.scss';

initStore();

const App = () => {
    return (
        <Provider store={ store }>
            <BrowserRouter>
                <AppContainer />
            </BrowserRouter>
        </Provider>
    );
};

export default App;
