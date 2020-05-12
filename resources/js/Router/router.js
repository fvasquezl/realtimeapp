import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import login from '../components/login/Login';
import signUp from '../components/login/SignUp';

const routes = [{
    path: '/login',
    name: 'login',
    props: true,
    component: login
},{
    path: '/signUp',
    name: 'signUp',
    props: true,
    component: signUp
}];

const router = new VueRouter({
    routes,
    hashbang: false,
    mode: 'history'
});

export default router;
