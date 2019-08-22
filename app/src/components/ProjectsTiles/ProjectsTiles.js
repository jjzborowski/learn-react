import React from 'react';
import Tile from 'src/ui/Tile/Tile';

const ProjectsTiles = ({ projects }) => (
    <>
        { projects.map(project => (
            <Tile
                key={ project.id }
                onClickHandler={ () => {} }
                id={ project.id }
                image={ project.image }
                label={ project.info.title }
                type="small"
            />
        )) }
    </>
);

export default ProjectsTiles;