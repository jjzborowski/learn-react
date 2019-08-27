import React from 'react';
import Tile from 'src/ui/Tile/Tile';
import Tiles from 'src/ui/Tiles/Tiles';

const ProjectsTiles = ({ projects }) => (
    <Tiles>
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
    </Tiles>
);

export default ProjectsTiles;