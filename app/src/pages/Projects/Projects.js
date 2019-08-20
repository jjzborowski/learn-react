import React from 'react';
import { connect } from 'react-redux';
import { modalDisplayAction } from 'src/actions/modal.actions';
import ProjectsList from 'src/components/ProjectsList/ProjectsList';
import Button from 'src/ui/Button/Button';
import styles from './Projects.scss';

const Projects = ({ onClickHandler }) => {
    return (
        <div className={ styles.projects }>
            <ProjectsList />
            <Button
                onClickHandler={ onClickHandler }
                label="Add new project"
            />
        </div>
    );
};

const mapDispatchToProps = {
    onClickHandler: () => modalDisplayAction('ModalAddProject'),
};

export default connect(null, mapDispatchToProps)(Projects);
