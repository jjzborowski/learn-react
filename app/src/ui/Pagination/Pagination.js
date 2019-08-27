import React from 'react';
import styles from './Pagination.scss';

const Pagination = ({ onClickHandler, listLength, perPage }) => {
    const pages = [];

    for (let i = 0; i <= listLength / perPage; i += 1) {
        pages.push(<div
            key={ i + 1 }
            onClick={ () => onClickHandler(i) }
        >{ i + 1 }</div>);
    }

    return (
        <div className={ styles.pagination }>
            { pages }
        </div>
    );
};

export default Pagination;