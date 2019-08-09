import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { alertHideMessageAction } from 'src/actions/alert.actions';
import {
    getAlertMessage,
    getAlertType,
} from 'src/selectors/alert.selectors';
import styles from './Alert.scss';

const Alert = ({
    alertHideMessage, message, type,
}) => {
    const [ timer, setTimer ] = useState(null);

    // useEffect(() => {
    //     setTimer(setTimeout(() => {
    //         alertHideMessage();
    //     }, alertConfig.delay));
    //
    //     return clearTimeout(timer);
    // }, [ message ]);

    const clickHandler = () => {
        clearTimeout(timer);
        alertHideMessage();
    };

    return (
        <div className={ classNames(styles.alert, styles[type]) }>
            <i className="fa fa-times-circle" />
            <i className="fa fa-exclamation-circle" />
            <i className="fa fa-check-circle" />
            <i className="fa fa-info-circle" />
            <span className={ classNames(styles.icon, styles[type]) } />
            { message }
            <button onClick={clickHandler}>X</button>
        </div>
    );
};

Alert.propTypes = {
    message: PropTypes.string,
    type: PropTypes.string,
};

const mapStateToProps = state => (
    {
        message: getAlertMessage(state),
        type: getAlertType(state),
    }
);

const mapDispatchToProps = {
    alertHideMessage: alertHideMessageAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Alert);