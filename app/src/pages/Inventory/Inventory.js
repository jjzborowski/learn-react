import React, { useContext } from 'react';
import List from 'src/components/PartsList/PartsList';
import { ModalContext } from 'src/context/modal.context';
import Button from 'src/ui/Button/Button';
import styles from './Inventory.scss';

const Inventory = () => {
    const { showModal } = useContext(ModalContext);
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