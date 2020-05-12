import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import login from '../components/login/Login';
import signUp from '../components/login/SignUp';
import forum from '../components/forum/Forum';
import logout from '../components/login/Logout';

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
},{
    path: '/forum',
    name: 'forum',
    props: true,
    component: forum
},{
    path: '/logout',
    name: 'logout',
    props: true,
    component: logout
},];

const router = new VueRouter({
    routes,
    hashbang: false,
    mode: 'history'
});

export default router;
