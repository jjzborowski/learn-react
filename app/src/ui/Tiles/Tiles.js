import React from 'react';
import styles from './Tiles.scss';

const Tiles = ({ children }) => {
    return (
        <div className={ styles.tiles }>
            { children }
        </div>
    );
};

export default Tiles;