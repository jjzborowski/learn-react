import React from 'react';
import { connect } from 'react-redux';
import { projectsListAddAction } from 'src/actions/projects.actions';
import modalStyles from 'src/components/Modal/Modal.scss';
import Button from 'src/ui/Button/Button';
import uuid from 'uuid';
import Input from '../../ui/Input/Input';
import Label from '../../ui/Label/Label';


const ModalAddProject = ({ onSaveHandler, onCloseHandler }) => {
    const id = uuid();
    const mockPart = {
        id: id,
        info: {
            title: `test title ${ id }`,
            description: `test description ${ id }`
        },
        image: {
            alt: `test title ${ id }`
        },
        quantity: 0,
        available: 0,
        used: 0,
        order: 1
    };
    return (
        <div>
            <div className={ modalStyles.content }>
                <form>
                    <Label text="Title"/>
                    <Input type="text"/>
                    <hr/>
                    <Label text="Description"/>
                    <textarea/>
                    <hr/>
                    <Label text="Image"/>
                    <hr/>
                </form>
            </div>
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
    onSaveHandler: projectsListAddAction
};
export default connect(null, mapDispatchToProps)(ModalAddProject);