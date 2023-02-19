class FakeDb {

    menu = [{
        id: '1a2b3c',
        name: 'Plain',
        bun: 'regular',
        patty: 1,
        cheese: false,
        lettuce: false,
        tomato: false,
        onion: false,
    }, {
        id: '4d5e6g',
        name: 'Cheeseburger',
        bun: 'regular',
        patty: 1,
        cheese: true,
        lettuce: false,
        tomato: false,
        onion: false,
    }, {
        id: '7h8i9j',
        name: 'Double',
        bun: 'regular',
        patty: 2,
        cheese: false,
        lettuce: false,
        tomato: false,
        onion: false,
    }, {
        id: '1k2l3m',
        name: 'Double Cheeseburger',
        bun: 'regular',
        patty: 2,
        cheese: true,
        lettuce: false,
        tomato: false,
        onion: false,
    }, {
        id: '4n5o6p',
        name: 'Full Stack',
        bun: 'sesame',
        patty: 2,
        cheese: true,
        lettuce: true,
        tomato: true,
        onion: true,
    }]
}

export const fakeDb = new FakeDb()