import React, { useContext } from 'react';
import Button from 'src/ui/Button/Button';
import { ModalContext } from 'src/context/modal.context';
import PartAddModal from '../../components/PartAddModal/PartAddModal';
import styles from './ListItem.scss';

const ListItem = ({ image, children, onRemoveHandler }) => {
    const { showModal } = useContext(ModalContext);

    const onShowModalClickHandler = () => showModal('Add new part', <div>Do you want to remove this project?</div>, onRemoveHandler);

    return (
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
                onClickHandler={onShowModalClickHandler}
                label={<i className="fa fa-times" /> }
                type="ghost"/>
        </div>
    );
};

export default ListItem;