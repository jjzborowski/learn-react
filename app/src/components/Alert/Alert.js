import classNames from 'classnames';
import React, {
    useContext,
    useState,
} from 'react';
import { AlertContext } from 'src/context/alert.context';
import Button from 'src/ui/Button/Button';
import styles from './Alert.scss';

const Alert = () => {
    const { alertType, alertContent, hideAlert } = useContext(AlertContext);
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
        hideAlert();
    };

    return (
        <div className={ classNames(styles.alert, styles[alertType]) }>
            <i className="fa fa-times-circle" />
            <i className="fa fa-exclamation-circle" />
            <i className="fa fa-check-circle" />
            <i className="fa fa-info-circle" />
            <span className={ classNames(styles.icon, styles[alertType]) } />
            { alertContent }
            <Button
                onClickHandler={ clickHandler }
                label="X"
                type="ghost"
            />
        </div>
    );
};

export default Alert;