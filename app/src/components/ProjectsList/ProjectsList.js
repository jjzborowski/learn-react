import React from 'react';
import { connect } from 'react-redux';
import ProjectsListItem from 'src/components/ProjectsListItem/ProjectsListItem';
import { getProjectsData } from 'src/selectors/projects.selectors';
import styles from './ProjectsList.scss';

const ProjectsList = ({ items }) => (
    <div className={ styles.projects }>
        { Object.values(items)
            .map(item => (
                <ProjectsListItem
                    key={ item.id }
                    { ...item }
                />
            )) }
    </div>
);

const mapStateToProps = state => (
    {
        items: getProjectsData(state),
    }
);

export default connect(mapStateToProps)(ProjectsList);