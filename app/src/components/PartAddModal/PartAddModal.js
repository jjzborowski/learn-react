import React from 'react';
import uuid from 'uuid';

const PartAddModal = () => {
    const id = uuid();
    const mockPart = {
        id: id,
        info: {
            name: `test name ${ id }`,
            description: `test description ${ id }`,
        },
        image: {
            alt: `test name ${ id }`,
        },
        quantity: 0,
        available: 0,
        used: 0,
        order: 1,
    };

    return (
        <div>
            Add part
        </div>
    );
};

export default PartAddModal;