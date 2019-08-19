import classNames from 'classnames';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { alertHideAction } from 'src/actions/alert.actions';
import {
    getAlertContent,
    getAlertType,
} from 'src/selectors/alert.selectors';
import Button from 'src/ui/Button/Button';
import styles from './Alert.scss';

const Alert = ({ onCloseHandler, content, type }) => {
    const [ timer, setTimer ] = useState(null);

    // useEffect(() => {
    //     setTimer(setTimeout(() => {
    //         onCloseHandler();
    //     }, alertConfig.delay));
    //
    //     return clearTimeout(timer);
    // }, [ message ]);

    const clickHandler = () => {
        clearTimeout(timer);
        onCloseHandler();
    };

    return (
        <div className={ classNames(styles.alert, styles[type]) }>
            <i className="fa fa-times-circle" />
            <i className="fa fa-exclamation-circle" />
            <i className="fa fa-check-circle" />
            <i className="fa fa-info-circle" />
            <span className={ classNames(styles.icon, styles[type]) } />
            { content }
            <Button
                onClickHandler={ clickHandler }
                label="X"
                type="ghost"
            />
        </div>
    );
};

const mapStateToProps = state => (
    {
        content: getAlertContent(state),
        type: getAlertType(state),
    }
);

const mapDispatchToProps = {
    onCloseHandler: alertHideAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Alert);