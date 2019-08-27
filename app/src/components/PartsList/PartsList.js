import React from 'react';
import List from 'src/ui/List/List';
import ListItem from 'src/ui/ListItem/ListItem';
import styles from './PartsList.scss';

const PartsList = ({ parts, onRemoveHandler }) => (
    <List>
        { parts.map(part => (
            <ListItem
                key={ part.id }
                image={ part.image }
                onRemoveHandler={() => onRemoveHandler(part.id)}
            >
                <div className={ styles.info }>
                    <div className={ styles.number }>
                        { part.info.number }
                    </div>
                    <div className={ styles.name }>
                        { part.info.name }
                    </div>
                    <div className={ styles.description }>
                        { part.info.description }
                    </div>
                </div>
                <div className={ styles.quantity }>
                    <div>
                        <span>Quantity:</span>
                        <span>{ part.quantity.total }</span>
                    </div>
                    <div>
                        <span>Used:</span>
                        <span>{ part.quantity.used }</span>
                    </div>
                    <div>
                        <span>Available:</span>
                        <span>{ part.quantity.available }</span>
                    </div>
                </div>
            </ListItem>
        )) }
    </List>
);

export default PartsList;