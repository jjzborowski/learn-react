import React from 'react';
import { connect } from 'react-redux';
import { getPartById } from 'src/selectors/parts.selectors';
import Tile from 'src/ui/Tile/Tile';

const ProjectsListItemPart = ({ part }) => (
    <Tile
        onClickHandler={ () => {} }
        id={ part.id }
        image={ part.image }
        label={ part.info.number }
        type="small"
    />
);

const mapStateToProps = (state, { id }) => (
    {
        part: getPartById(state, id),
    }
);

export default connect(mapStateToProps)(ProjectsListItemPart);