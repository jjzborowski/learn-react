import React from 'react';
import styles from './ListItem.scss';

const ListItem = ({ image, children }) => (
    <div className={ styles['list-item'] }>
        <div className={ styles.image }>
            <img
                alt={ image.alt }
                src={ image.path }
            />
        </div>
        <div className={ styles.info }>
            { children }
        </div>
    </div>
);

export default ListItem;