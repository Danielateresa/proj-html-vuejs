import { reactive } from 'vue'

export const store = reactive({
    headerLinks: [
        'Home',
        'Culinary History',
        'Our Team',
        'Our Menu',
        'Takeout',
        'Bulletin',
        'Reservations',
        'Cart'],

    sectionFood: [{
        img: 'sushi-1.png',
        title: 'the best table in town',
        buttonText: 'explore the menu',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis vero odit illo labore est nam architecto velit ducimus.'
    },
    {
        img: 'sushi-2.png',
        title: 'perfect for groups',
        buttonText: 'make a reservation',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis vero odit illo labore est nam architecto velit ducimus.'
    },
    {
        img: 'sushi-3.png',
        title: 'fresh produce everyday',
        buttonText: 'learn more about us',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis vero odit illo labore est nam architecto velit ducimus.'
    }],

    upperCritic: {
        name: 'meggy stewart',
        magazine: 'new york times',
        buttonText: 'read full article',
        text1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iusto accusamus molestias repudiandae hic iure inventore dolor dolores repellendus consequatur?',
        text2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iusto accusamus molestias.'
    },
    critics: [{
        name: 'mary maxey',
        magazine: 'the guardian',
        img: 'info52x.jpg',
        buttonText: 'read full article',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis vero odit illo labore est nam architecto velit ducimus autem tenetur.'
    },
    {
        name: 'patrick monroe',
        magazine: 'globe and mail',
        img: 'info12x.jpg',
        buttonText: 'read full article',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis vero odit illo labore est nam architecto velit ducimus autem tenetur.'
    }],

    news: [{
        title: 'the best coffe in town',
        img: 'blog92x-600x687.jpg',
        text: 'By admin | Juanuary 7th, 2020 | Categories: News'
    },
    {
        title: 'discover our new menu',
        img: 'blog72x-600x687.jpg',
        text: 'By admin | Juanuary 7th, 2020 | Categories: News'
    },
    {
        title: 'we now accept square!',
        img: 'blog82x-600x687.jpg',
        text: 'By admin | Juanuary 7th, 2020 | Categories: News'
    },
    ],

    infoTable: {
        slogan: 'fine dining experience',
        title: 'the best table in town',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo labore officia suscipit quia cumque.',
        buttonText: 'explore the menu',
    },

    ourFood: {
        firstPharag: '<b>Lorem ipsum dolor sit amet</b> consectetur adipisicing elit. Quaerat minus vitae rerum aspernatur eius perferendis quis natus debitis rem autem.',
        title: 'food is our common ground, a universal experience.',
        secondPharag: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iusto accusamus molestias repudiandae hic iure inventore dolor dolores repellendus consequatur?',
        signature: 'signature-200x172.jpg',
        img: 'info22x.jpg',
        plateDescription: 'california rolls - $22',
    },

    infoTakeout: {
        slogan: 'enjoy your meal at home',
        title: 'takeout now available',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo labore officia suscipit quia cumque.',
        buttonText: 'view takeout menu',
    },

    menu: [
        {
            title: 'hors d\'oeuvres',
            plates: [{
                name: 'ahi salmon nigiri',
                price: '$ 48',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo labore officia suscipit.'
            },
            {
                name: 'umi masu salad',
                price: '$ 21',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo labore officia suscipit.'
            },
            {
                name: 'temaki with crab',
                price: '$ 32',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo labore officia suscipit.'
            },
            {
                name: 'california rolls',
                price: '$ 22',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo labore officia suscipit.'
            }]
        },
        {
            title: 'main course',
            plates: [{
                name: 'braised abalone',
                price: '$ 52',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo labore officia suscipit.'
            },
            {
                name: 'twice cooked pork',
                price: '$ 21',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo labore officia suscipit.'
            },
            {
                name: 'kung pao chicken',
                price: '$ 32',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo labore officia suscipit.'
            },
            {
                name: 'char siu & sushis',
                price: '$ 48',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo labore officia suscipit.'
            }]
        },
        {
            title: 'desserts',
            plates: [{
                name: 'chocolate ball cake',
                price: '$ 13',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo labore officia suscipit.'
            },
            {
                name: 'lime pie eith crust',
                price: '$ 14',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo labore officia suscipit.'
            },
            {
                name: 'rasberry pear cake',
                price: '$ 18',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo labore officia suscipit.'
            },
            {
                name: 'cafè au lait',
                price: '$ 6',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo labore officia suscipit.'
            }]
        },

    ],

    plateFocus: {
        price: '$ 52',
        title: 'braised abalone',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo labore officia suscipit quia cumque.',
        buttonText: 'view in the menu',
    },
})

