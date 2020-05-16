import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import Login from '../components/login/Login';
import SignUp from '../components/login/SignUp';
import Forum from '../components/forum/Forum';
import Read from '../components/forum/Read';
import Create from '../components/forum/Create';
import CreateCategory from '../components/category/CreateCategory';
import Logout from '../components/login/Logout';

const routes = [{
    path: '/login',
    name: 'login',
    props: true,
    component: Login
},{
    path: '/signUp',
    name: 'signUp',
    props: true,
    component: SignUp
},{
    path: '/forum',
    name: 'forum',
    props: true,
    component: Forum
},{
    path: '/question/:slug',
    name: 'read',
    props: true,
    component: Read
},{
    path: '/ask',
    name: 'create',
    props: true,
    component: Create
},{
    path: '/category',
    name: 'CreateCategory',
    props: true,
    component: CreateCategory
},{
    path: '/logout',
    name: 'logout',
    props: true,
    component: Logout
},];

const router = new VueRouter({
    routes,
    hashbang: false,
    mode: 'history'
});

export default router;
