import React from 'react';
import modalStyles from 'src/components/Modal/Modal.scss';
import Button from 'src/ui/Button/Button';

const ConfirmModal = ({ onSaveHandler, onCloseHandler }) => {
    return (
        <div>
            Add part
            <div className={ modalStyles.footer }>
                <Button
                    onClickHandler={ () => {
                        onSaveHandler(mockPart);
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
        </div>
    );
};

export default ConfirmModal;