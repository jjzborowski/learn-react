import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppContainer from 'src/components/AppContainer/AppContainer';
import { initStore } from 'src/store/init.store';
import store from 'src/store/store';
import './App.scss';
import AlertContextProvider from 'src/context/alert.context';
import ModalContextProvider from 'src/context/modal.context';

initStore();

const App = () => {
    return (
        <Provider store={ store }>
            <BrowserRouter>
                <AlertContextProvider>
                    <ModalContextProvider>
                        <AppContainer />
                    </ModalContextProvider>
                </AlertContextProvider>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
