const projectsListDummy = {
    // 1: {
    //     id: 1,
    //     info: {
    //         title: 'test title 1',
    //         description: 'test description 1',
    //         added: 'Tue Aug 20 2019 09:28:54 GMT+0200',
    //         modified: 'Tue Aug 20 2019 09:28:54 GMT+0200',
    //         modification_count: 0,
    //     },
    //     image: {
    //         alt: 'test title 1',
    //         path: 'src/dummies/project1.jpg',
    //     },
    //     order: 1,
    //     parts: {
    //         amount: 7,
    //         list: {
    //             1: {
    //                 id: 1,
    //                 amount: 2,
    //             },
    //             3: {
    //                 id: 3,
    //                 amount: 5,
    //             },
    //         },
    //     },
    // },
    // 2: {
    //     id: 2,
    //     info: {
    //         title: 'test title 2',
    //         description: 'test description 2',
    //         added: 'Tue Aug 21 2019 09:28:54 GMT+0200',
    //         modified: 'Tue Aug 21 2019 09:28:54 GMT+0200',
    //         modification_count: 0,
    //     },
    //     image: {
    //         alt: 'test title 2',
    //         path: 'src/dummies/project2.jpg',
    //     },
    //     order: 1,
    //     parts: {
    //         amount: 20,
    //         list: {
    //             1: {
    //                 id: 4,
    //                 amount: 14,
    //             },
    //             3: {
    //                 id: 5,
    //                 amount: 6,
    //             },
    //         },
    //     },
    // },
    // 3: {
    //     id: 3,
    //     info: {
    //         title: 'test title 3',
    //         description: 'test description 3',
    //         added: 'Tue Aug 21 2019 09:28:54 GMT+0200',
    //         modified: 'Tue Aug 21 2019 09:28:54 GMT+0200',
    //         modification_count: 0,
    //     },
    //     image: {
    //         alt: 'test title 3',
    //         path: 'src/dummies/project3.jpg',
    //     },
    //     order: 1,
    //     parts: {
    //         amount: 8,
    //         list: {
    //             1: {
    //                 id: 2,
    //                 amount: 4,
    //             },
    //             3: {
    //                 id: 3,
    //                 amount: 4,
    //             },
    //         },
    //     },
    // },
};

for (let i = 1; i < 40; i += 1) {
    projectsListDummy[i] = {
        id: i,
        info: {
            title: `test title ${ i }`,
            description: `test description ${ i }`,
            added: 'Tue Aug 21 2019 09:28:54 GMT+0200',
            modified: 'Tue Aug 21 2019 09:28:54 GMT+0200',
            modification_count: 0,
        },
        image: {
            alt: `test title ${ i }`,
            path: 'src/dummies/project3.jpg',
        },
        parts: {
            amount: 8,
            list: {
                1: {
                    id: 2,
                    amount: 4,
                },
                3: {
                    id: 3,
                    amount: 4,
                },
            },
        },
    };
}

export default projectsListDummy;