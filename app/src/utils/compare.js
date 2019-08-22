const compare = (elementA, elementB, orderBy) => {
    const [ path, order ] = orderBy.split(':');
    const pathSteps = path.split('.');
    let propertyA = elementA;
    let propertyB = elementB;
    while (pathSteps.length) {
        let property = pathSteps.shift();
        propertyA = propertyA[property];
        propertyB = propertyB[property];
    }

    if (propertyA > propertyB) {
        return order === 'asc' ? 1 : -1;
    }

    if (propertyA < propertyB) {
        return order === 'desc' ? 1 : -1;
    }

    return 0;
};

export default compare;