import { createApp } from 'vue'
import './assets/scss/style.scss'
import App from './App.vue'

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
library.add(faShoppingCart, faStar)


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
