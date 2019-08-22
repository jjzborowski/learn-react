import classNames from 'classnames';
import React from 'react';
import styles from './Input.scss';

const Input = ({ type, placeholder, value, name }) => {
    return (
        <input
            className={ classNames(styles.input) }
            type={ type }
            placeholder={ placeholder }
            value={ value }
            name={ name }
        />
    );
};

export default Input;
