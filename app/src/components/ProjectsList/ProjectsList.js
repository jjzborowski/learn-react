import React from 'react';
import { connect } from 'react-redux';
import { getListData } from 'src/selectors/list.selectors';
import styles from './ProjectsList.scss';

const ProjectsList = ({ items }) => (
    <div className={ styles.projects }>
        {/*{ Object.values(items)*/ }
        {/*    .map(item => (*/ }
        {/*        <ElementsListItem*/ }
        {/*            key={ item.id }*/ }
        {/*            { ...item }*/ }
        {/*        />*/ }
        {/*    )) }*/ }
    </div>
);

const mapStateToProps = state => (
    {
        items: getListData(state),
    }
);

export default connect(mapStateToProps)(ProjectsList);