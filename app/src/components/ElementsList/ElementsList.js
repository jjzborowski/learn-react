import React from 'react';
import { connect } from 'react-redux';
import ElementsListItem from 'src/components/ElementsListItem/ElementsListItem';
import { getListData } from 'src/selectors/list.selectors';
import styles from './ElementsList.scss';

const ElementsList = ({ items }) => (
    <div className={ styles.list }>
        { Object.values(items)
            .map(item => (
                <ElementsListItem
                    key={ item.id }
                    { ...item }
                />
            )) }
    </div>
);

const mapStateToProps = state => (
    {
        items: getListData(state),
    }
);

export default connect(mapStateToProps)(ElementsList);