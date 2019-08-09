import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMenu } from 'src/selectors/menu.selectors';
import styles from './Menu.scss';

const Menu = ({ items }) => {
    return (
        <nav className={ styles.menu }>
            { Object.values(items)
                .map(item => (
                    <span
                        key={ item.id }
                        className={ styles.menuItem }
                    >
                        <Link to={ item.path }>
                            { item.label }
                        </Link>
                    </span>
                )) }
        </nav>
    );
};

Menu.propTypes = {
    items: PropTypes.shape({
        label: PropTypes.string,
        path: PropTypes.string,
    }),
};

const mapStateToProps = state => (
    {
        items: getMenu(state),
    }
);

export default connect(mapStateToProps)(Menu);