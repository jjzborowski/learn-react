import React, { useContext } from 'react';
import { ModalContext } from 'src/context/modal.context';
import Button from 'src/ui/Button/Button';
import ClickOutside from 'src/utils/clickOutside';
import styles from './Modal.scss';

const Modal = () => {
    const { modalTitle, modalContent, modalCallback, hideModal } = useContext(ModalContext);
    const onCloseHandler = () => hideModal();

    return (
        <div className={ styles.modal }>
            <ClickOutside className={ styles.container } clickOutsideHandler={onCloseHandler}>
                <div className={styles.title}>{ modalTitle }</div>
                <div className={styles.content}>
                    { modalContent }
                </div>
                <div className={ styles.footer }>
                    <Button
                        onClickHandler={ () => {
                            modalCallback();
                            onCloseHandler();
                        } }
                        label="Save"
                    />
                    <Button
                        onClickHandler={ onCloseHandler }
                        label="Cancel"
                        type="secondary"
                    />
                </div>
            </ClickOutside>
        </div>
    );
};

export default Modal;