import React, { useContext } from 'react';
import List from 'src/components/PartsList/PartsList';
import Button from 'src/ui/Button/Button';
import { ModalContext } from 'src/context/modal.context';
import styles from './Inventory.scss';

const Inventory = () => {
    const {showModal} = useContext(ModalContext);
    const onClickHandler = () => showModal('ModalAddPart');

    return (
        <div className={ styles.inventory }>
            <List />
            <Button
                onClickHandler={ onClickHandler }
                label="Add new element"
            />
        </div>
    );
};

export default Inventory;