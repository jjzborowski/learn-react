import React from 'react';
import Button from 'src/ui/Button/Button';
import styles from './ListItem.scss';

const ListItem = ({ image, children, onRemoveHandler }) => (
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
        <Button
            onClickHandler={ onRemoveHandler }
            label={ <i className="fa fa-times" /> }
            type="ghost"
        />
    </div>
);

export default ListItem;