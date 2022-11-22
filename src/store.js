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
        buttonText: 'explore the menu'
    },
    {
        img: '/sushi-2.png',
        title: 'perfect for groups',
        buttonText: 'make a reservation'
    },
    {
        img: '/sushi-3.png',
        title: 'fresh produce everyday',
        buttonText: 'learn more about us'
    }]

})
