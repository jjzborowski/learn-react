import React, { useContext } from 'react';
import Alert from 'src/components/Alert/Alert';
import Menu from 'src/components/Menu/Menu';
import Modal from 'src/components/Modal/Modal';
import Routes from 'src/components/Routes/Routes';
import { AlertContext } from 'src/context/alert.context';
import { ModalContext } from 'src/context/modal.context';

const AppContainer = () => {
    const { isAlertDisplay } = useContext(AlertContext);
    const { isModalDisplay } = useContext(ModalContext);

    return (
        <>
            { isAlertDisplay && <Alert /> }
            { isModalDisplay && <Modal /> }
            <Menu />
            <Routes />
        </>
    );
};

export default AppContainer;
