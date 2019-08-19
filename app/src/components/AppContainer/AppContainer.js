import React from 'react';
import { connect } from 'react-redux';
import Alert from 'src/components/Alert/Alert';
import Menu from 'src/components/Menu/Menu';
import Modal from 'src/components/Modal/Modal';
import Routes from 'src/components/Routes/Routes';
import { getAlertDisplay } from 'src/selectors/alert.selectors';
import { getModalDisplay } from 'src/selectors/modal.selectors';

const AppContainer = ({ alertDisplay, modalDisplay }) => (
    <>
        { alertDisplay && <Alert /> }
        { modalDisplay && <Modal /> }
        <Menu />
        <Routes />
    </>
);

const mapStateToProps = state => (
    {
        alertDisplay: getAlertDisplay(state),
        modalDisplay: getModalDisplay(state),
    }
);

export default connect(mapStateToProps)(AppContainer);