import React from 'react';
import { Link } from 'react-router-dom';
import menu from 'src/constants/menu';
import styles from './Menu.scss';

const Menu = () => (
    <div className={ styles.menu }>
        { menu.map(item => (
            <nav
                key={ item.id }
                className={ styles.item }
            >
                <Link to={ item.path }>
                    { item.label }
                </Link>
            </nav>
        )) }
    </div>
);

export default Menu;