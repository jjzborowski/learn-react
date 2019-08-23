import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppContainer from 'src/components/AppContainer/AppContainer';
import AlertContextProvider from 'src/context/alert.context';
import ModalContextProvider from 'src/context/modal.context';
import { initStore } from 'src/redux/store/init.store';
import store from 'src/redux/store/store';
import './App.scss';

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
