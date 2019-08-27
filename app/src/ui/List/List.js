import React from 'react';
import styles from './List.scss';

const List = ({ children }) => (
    <div className={ styles.list }>
        { children }
    </div>
);

export default List;