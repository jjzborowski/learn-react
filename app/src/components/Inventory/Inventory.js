import React from 'react';
import { connect } from 'react-redux';
import { modalDisplayAction } from 'src/actions/modal.actions';
import List from 'src/components/ElementsList/ElementsList';
import Button from 'src/ui/Button/Button';
import styles from './Inventory.scss';

const Inventory = ({ onClickHandler }) => (
    <div className={ styles.inventory }>
        <List />
        <Button
            onClickHandler={ onClickHandler }
            label="Add new element"
        />
    </div>
);

const mapDispatchToProps = {
    onClickHandler: () => modalDisplayAction('ElementsListAddModal'),
};

export default connect(null, mapDispatchToProps)(Inventory);