import React, { useContext } from 'react';
import ProjectsList from 'src/components/ProjectsList/ProjectsList';
import Button from 'src/ui/Button/Button';
import { ModalContext } from '../../context/modal.context';
import styles from './Projects.scss';

const Projects = () => {
    const {showModal} = useContext(ModalContext);
    const onClickHandler = () => showModal('ModalAddProject');

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

export default Projects;
