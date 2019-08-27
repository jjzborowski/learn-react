import React from 'react';
import { connect } from 'react-redux';
import modalStyles from 'src/components/Modal/Modal.scss';
import { addProjectAction } from 'src/redux/actions/projects.actions';
import Button from 'src/ui/Button/Button';
import Input from 'src/ui/Input/Input';
import Label from 'src/ui/Label/Label';
import uuid from 'uuid';

const ProjectAddModal = ({ onSaveHandler, onCloseHandler }) => {
    const id = uuid();
    const mockPart = {
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
            <div className={ modalStyles.content }>
                <form>
                    <Label text="Title" />
                    <Input type="text" />
                    <hr />
                    <Label text="Description" />
                    <textarea />
                    <hr />
                    <Label text="Image" />
                    <hr />
                </form>
            </div>
        </div>
    );
};
const mapDispatchToProps = {
    onSaveHandler: addProjectAction,
};
export default connect(null, mapDispatchToProps)(ProjectAddModal);