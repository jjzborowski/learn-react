import React from 'react';
import ProjectsListItemParts from 'src/components/ProjectsListItemPart/ProjectsListItemPart';
import styles from './ProjectsListItem.scss';

const ProjectsListItem = ({ info, image, parts }) => {
    const added = new Date(info.added);
    const modified = new Date(info.modified);

    return (
        <div className={ styles.item }>
            <div className={ styles.image }>
                <img
                    alt={ image.alt }
                    src={ image.path }
                />
            </div>
            <div className={ styles.info }>
                <div>{ info.title }</div>
                <div>Added: { added.toLocaleString() }</div>
                <div>Last modified: { modified.toLocaleString() }</div>
                <div>{ info.description }</div>
            </div>
            <div className={ styles.parts }>
                { Object.values(parts)
                    .map(part => (
                        <ProjectsListItemParts
                            key={ part.id }
                            { ...part }
                        />
                    )) }
            </div>
        </div>
    );
};

export default ProjectsListItem;
