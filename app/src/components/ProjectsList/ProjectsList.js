import React from 'react';
import ProjectsListItem from 'src/components/ProjectsListItem/ProjectsListItem';
import styles from './ProjectsList.scss';

const ProjectsList = ({ projects }) => (
    <div className={ styles.projects }>
        { projects.map(project => (
            <>
                <ProjectsListItem
                    key={ project.id }
                    { ...project }
                />
            </>
        )) }
    </div>
);

export default ProjectsList;