require('./bootstrap');

window.Vue = require('vue');

import Vuetify from 'vuetify'
Vue.use(Vuetify)

import User from './Helpers/User'
window.User = User
window.EventBus = new Vue()

import md from "marked";
window.md = md

Vue.component('AppHome',require('./components/AppHome').default);

import router from './Router/router';

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    router,
});
