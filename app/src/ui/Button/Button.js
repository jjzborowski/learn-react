import classNames from 'classnames';
import React from 'react';
import styles from './Button.scss';

const Button = ({ onClickHandler, label, type }) => {
    return (
        <button
            className={ classNames(styles.button, styles[type]) }
            onClick={ onClickHandler }
        >
            { label }
        </button>
    );
};

Button.defaultProps = {
    type: 'primary',
};

export default Button;
