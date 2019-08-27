const partsListDummy = {
    // 1: {
    //     id: 1,
    //     info: {
    //         number: 1,
    //         name: 'test name 1',
    //         description: 'test description 1',
    //     },
    //     image: {
    //         alt: 'test name 1',
    //         path: 'src/dummies/image2.png',
    //     },
    //     quantity: {
    //         total: 0,
    //         available: 0,
    //         used: 0,
    //     },
    // },
    // 2: {
    //     id: 2,
    //     info: {
    //         number: 2,
    //         name: 'test name 2',
    //         description: 'test description 2',
    //     },
    //     image: {
    //         alt: 'test name 1',
    //         path: 'src/dummies/image2.png',
    //     },
    //     quantity: {
    //         total: 0,
    //         available: 0,
    //         used: 0,
    //     },
    // },
    // 3: {
    //     id: 3,
    //     info: {
    //         number: 3,
    //         name: 'test name 3',
    //         description: 'test description 3',
    //     },
    //     image: {
    //         alt: 'test name 1',
    //         path: 'src/dummies/image1.png',
    //     },
    //     quantity: {
    //         total: 0,
    //         available: 0,
    //         used: 0,
    //     },
    // },
    // 4: {
    //     id: 4,
    //     info: {
    //         number: 4,
    //         name: 'test name 4',
    //         description: 'test description 4',
    //     },
    //     image: {
    //         alt: 'test name 1',
    //         path: 'src/dummies/image1.png',
    //     },
    //     quantity: {
    //         total: 0,
    //         available: 0,
    //         used: 0,
    //     },
    // },
    // 5: {
    //     id: 5,
    //     info: {
    //         number: 5,
    //         name: 'test name 5',
    //         description: 'test description 5',
    //     },
    //     image: {
    //         alt: 'test name 1',
    //         path: 'src/dummies/image2.png',
    //     },
    //     quantity: {
    //         total: 0,
    //         available: 0,
    //         used: 0,
    //     },
    // },
};

for (let i = 1; i < 100; i += 1) {
    let available = Math.floor(Math.random() * 100);
    let used = Math.floor(Math.random() * 100);
    partsListDummy[i] = {
        id: i,
        info: {
            number: i,
            name: `test name ${ i }`,
            description: `test description ${ i }`,
        },
        image: {
            alt: `test name ${ i }`,
            path: 'src/dummies/image1.png',
        },
        quantity: {
            total: available + used,
            available,
            used,
        },
    };
}

export default partsListDummy;