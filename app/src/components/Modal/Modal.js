import React, { useContext } from 'react';
import ModalAddPart from 'src/components/ModalAddPart/ModalAddPart';
import ModalAddProject from 'src/components/ModalAddProject/ModalAddProject';
import { ModalContext } from 'src/context/modal.context';
import styles from './Modal.scss';

const Modal = () => {
    const { modalContent, hideModal } = useContext(ModalContext);
    const onCloseHandler = () => hideModal();

    const content = {
        ModalAddPart: {
            title: 'Add part',
            content: <ModalAddPart onCloseHandler={ onCloseHandler } />,
        },
        ModalAddProject: {
            title: 'Add project',
            content: <ModalAddProject onCloseHandler={ onCloseHandler } />,
        },
    };

    return (
        <div className={ styles.modal }>
            <fieldset className={ styles.container }>
                <legend>{ content[modalContent].title }</legend>
                <div>
                    { content[modalContent].content }
                </div>
            </fieldset>
        </div>
    );
};

export default Modal;