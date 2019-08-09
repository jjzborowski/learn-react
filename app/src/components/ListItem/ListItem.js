import React from 'react';
import {
    useDrag,
    useDrop,
} from 'react-dnd';

const ListItem = ({ orderNumber, title, description, moveCard, findCard }) => {
    const originalIndex = findCard(orderNumber).orderNumber;
    const [ { isDragging }, drag ] = useDrag({
        item: {
            type: 'list-item',
            orderNumber,
            originalIndex,
        },
        collect: monitor => (
            {
                isDragging: monitor.isDragging(),
            }
        ),
    });
    const [ , drop ] = useDrop({
        accept: 'list-item',
        canDrop: () => false,
        hover({ orderNumber: draggedId }) {
            if (draggedId !== orderNumber) {
                const { index: overIndex } = findCard(orderNumber);
                moveCard(draggedId, overIndex);
            }
        },
    });
    const opacity = isDragging ? 0 : 1;
    return (
        <div
            ref={ node => drag(drop(node)) }
            style={ {
                opacity,
            } }
        >
            <div>{ title }</div>
            <div>{ description }</div>
        </div>
    );
};

export default ListItem;
