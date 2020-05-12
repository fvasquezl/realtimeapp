import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import welcome from '../js/views/welcome/welcome';
import posts from '../js/views/posts/posts';

const routes = [{
    path: '/login',
    name: 'login',
    props: true,
    component: login
},{
    path: '/welcome',
    name: 'welcome',
    props: true,
    component: welcome
}];

const router = new VueRouter({
    routes,
    hashbang: false,
    mode: 'history'
});

export default router;
