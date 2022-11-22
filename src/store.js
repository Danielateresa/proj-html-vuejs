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
        img: '/sushi-1.png',
        title: 'the best table in town',
        buttonText: 'explore the menu',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis vero odit illo labore est nam architecto velit ducimus autem tenetur.'
    },
    {
        img: '/sushi-2.png',
        title: 'perfect for groups',
        buttonText: 'make a reservation',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis vero odit illo labore est nam architecto velit ducimus autem tenetur.'
    },
    {
        img: '/sushi-3.png',
        title: 'fresh produce everyday',
        buttonText: 'learn more about us',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis vero odit illo labore est nam architecto velit ducimus autem tenetur.'
    }],

    critics: [{
        name: 'mary maxey',
        magazine: 'the guardian',
        img: '/info52x.jpg',
        buttonText: 'explore the menu',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis vero odit illo labore est nam architecto velit ducimus autem tenetur.'
    },
    {
        name: 'patrick monroe',
        img: '/info12x.jpg',
        magazine: 'globe and mail',
        title: 'perfect for groups',
        buttonText: 'make a reservation',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis vero odit illo labore est nam architecto velit ducimus autem tenetur.'
    }],

    news: [{
        title: 'the best coffe in town',
        img: '/blog92x-600x687.jpg',
        text: 'By admin | Juanuary 7th, 2020 | Categories: News'
    },
    {
        title: 'the best coffe in town',
        img: '/blog72x-600x687.jpg',
        text: 'By admin | Juanuary 7th, 2020 | Categories: News'
    },
    {
        title: 'the best coffe in town',
        img: '/blog82x-600x687.jpg',
        text: 'By admin | Juanuary 7th, 2020 | Categories: News'
    },
    ],

})
