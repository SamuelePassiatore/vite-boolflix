import { createApp } from 'vue';
// Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Import font awesome
import {library} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

import App from './App.vue'

library.add(solidStar, regularStar);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
