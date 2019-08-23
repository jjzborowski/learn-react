import React from 'react';
import { connect } from 'react-redux';
import modalStyles from 'src/components/Modal/Modal.scss';
import { addPartAction } from 'src/redux/actions/parts.actions';
import Button from 'src/ui/Button/Button';
import uuid from 'uuid';

const PartAddModal = ({ onSaveHandler, onCloseHandler }) => {
    const id = uuid();
    const mockPart = {
        id: id,
        info: {
            name: `test name ${ id }`,
            description: `test description ${ id }`,
        },
        image: {
            alt: `test name ${ id }`,
        },
        quantity: 0,
        available: 0,
        used: 0,
        order: 1,
    };

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

const mapDispatchToProps = {
    onSaveHandler: addPartAction,
};

export default connect(null, mapDispatchToProps)(PartAddModal);