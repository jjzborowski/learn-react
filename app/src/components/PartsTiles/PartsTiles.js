import React from 'react';
import Tile from 'src/ui/Tile/Tile';
import Tiles from 'src/ui/Tiles/Tiles';

const PartsTiles = ({ parts }) => (
    <Tiles>
        { parts.map(part => (
            <Tile
                key={ part.id }
                onClickHandler={ () => {} }
                id={ part.id }
                image={ part.image }
                label={ part.info.name }
                type="small"
            />
        )) }
    </Tiles>
);

export default PartsTiles;