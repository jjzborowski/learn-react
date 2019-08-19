import React from 'react';
import { connect } from 'react-redux';
import { elementsListAddAction } from 'src/actions/elementsList.actions';
import modalStyles from 'src/components/Modal/Modal.scss';
import Button from 'src/ui/Button/Button';
import uuid from 'uuid';

const ElementsListAddModal = ({ onSaveHandler, onCloseHandler }) => {
    const id = uuid();
    const mockElement = {
        id: id,
        info: {
            title: `test title ${ id }`,
            description: `test description ${ id }`,
        },
        image: {
            alt: `test title ${ id }`,
        },
        quantity: 0,
        available: 0,
        used: 0,
        order: 1,
    };

    return (
        <div>
            Add
            <div className={ modalStyles.footer }>
                <Button
                    onClickHandler={ () => onSaveHandler(mockElement) }
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
    onSaveHandler: elementsListAddAction,
};

export default connect(null, mapDispatchToProps)(ElementsListAddModal);