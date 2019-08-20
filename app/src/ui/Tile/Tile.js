import classNames from 'classnames';
import React from 'react';
import Button from 'src/ui/Button/Button';
import styles from './Tile.scss';

const Tile = ({ onClickHandler, id, image, label, type }) => {
    return (
        <div className={ classNames(styles.tile, styles[type]) }>
            <div className={ styles.image }>
                <img
                    src={ image.path }
                    alt={ image.alt }
                />
            </div>
            <Button
                onClickHandler={ onClickHandler }
                label={ label }
                type="ghost"
            />
        </div>
    );
};

export default Tile;