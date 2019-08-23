import React from 'react';
import List from 'src/ui/List/List';
import ListItem from 'src/ui/ListItem/ListItem';

const ProjectsList = ({ projects }) => (
    <List>
        { projects.map(project => (
            <ListItem
                key={ project.id }
                image={ project.image }
            >
                <div>{ project.info.title }</div>
                <div>Added: { project.info.added.toLocaleString() }</div>
                <div>Last modified: { project.info.modified.toLocaleString() }</div>
                <div>{ project.info.description }</div>
                <div>{ project.parts.amount }</div>
            </ListItem>
        )) }
    </List>
);

export default ProjectsList;