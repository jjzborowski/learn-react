import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { connect } from 'react-redux';
import ListItem from 'src/components/ListItem/ListItem';
import { getListData } from 'src/selectors/list.selectors';
import listShape from 'src/shapes/list.shape';
import styles from './List.scss';

const List = ({ items }) => {
    const [ cards, setCards ] = useState(ITEMS);
    const moveCard = (id, atIndex) => {
        const { card, index } = findCard(id);
        setCards(update(cards, {
            $splice: [
                [
                    index,
                    1,
                ],
                [
                    atIndex,
                    0,
                    card,
                ],
            ],
        }));
    };
    const findCard = id => {
        const card = cards.filter(c => `${ c.id }` === id)[0];
        return {
            card,
            index: cards.indexOf(card),
        };
    };
    const [ , drop ] = useDrop({ accept: ItemTypes.CARD });

    return (
        <DndProvider backend={ HTML5Backend }>
            <div className={ styles.list }>
                { Object.values(items)
                    .map(item => (
                        <ListItem
                            key={ item.id }
                            title={ item.title }
                            description={ item.description }
                            className={ classNames(styles.item) }
                        />
                    )) }
            </div>
        </DndProvider>
    );
};

List.propTypes = {
    items: PropTypes.shape(listShape),
};

const mapStateToProps = state => (
    {
        items: getListData(state),
    }
);

export default connect(mapStateToProps)(List);