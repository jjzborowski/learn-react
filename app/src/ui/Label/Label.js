import React from 'react';
import styles from './Label.scss';
import classNames from 'classnames';

const Label = ({text}) => {
    return (
        <label className={classNames(styles.label)}>
            {text}
        </label>
    );
};

export default Label;