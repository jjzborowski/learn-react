import React from 'react';
import styles from './PartsListItem.scss';

const PartsListItem = ({ info, image, quantity, available, used }) => (
    <div className={ styles.item }>
        <div className={ styles.image }>
            <img
                alt={ image.alt }
                src={ image.path }
            />
        </div>
        <div className={ styles.info }>
            <div className={ styles.number }>
                { info.number }
            </div>
            <div className={ styles.name }>
                { info.name }
            </div>
            <div className={ styles.description }>
                { info.description }
            </div>
        </div>
        <div className={ styles.quantity }>
            <div>
                <span>Quantity:</span>
                <span>{ quantity }</span>
            </div>
            <div>
                <span>Used:</span>
                <span>{ used }</span>
            </div>
            <div>
                <span>Available:</span>
                <span>{ available }</span>
            </div>
        </div>
    </div>
);

export default PartsListItem;
