import React from 'react';
import { connect } from 'react-redux';
import { modalHideAction } from 'src/actions/modal.actions';
import ElementsListAddModal
    from 'src/components/ElementsListAddModal/ElementsListAddModal';
import { getModalContent } from 'src/selectors/modal.selectors';
import styles from './Modal.scss';

const Modal = ({ content, onCloseHandler }) => {
    const contentTemplates = {
        ElementsListAddModal:
            <ElementsListAddModal onCloseHandler={ onCloseHandler } />,
    };

    return (
        <div className={ styles.modal }>
            <div className={ styles.content }>
                { contentTemplates[content] }
            </div>
        </div>
    );
};

const mapStateToProps = state => (
    {
        content: getModalContent(state),
    }
);

const mapDispatchToProps = {
    onCloseHandler: modalHideAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);