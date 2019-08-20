import React from 'react';
import { connect } from 'react-redux';
import PartsListItem from 'src/components/PartsListItem/PartsListItem';
import { getPartsData } from 'src/selectors/parts.selectors';
import styles from './PartsList.scss';

const PartsList = ({ items }) => (
    <div className={ styles.list }>
        { Object.values(items)
            .map(item => (
                <PartsListItem
                    key={ item.id }
                    { ...item }
                />
            )) }
    </div>
);

const mapStateToProps = state => (
    {
        items: getPartsData(state),
    }
);

export default connect(mapStateToProps)(PartsList);