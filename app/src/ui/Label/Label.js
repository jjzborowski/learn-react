import classNames from 'classnames';
import React from 'react';
import styles from './Label.scss';

const Label = ({ text }) => {
    return (
        <label className={ classNames(styles.label) }>
            { text }
        </label>
    );
};

export default Label;