import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import LogIn from './components/LogIn.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { name: 'HomePage', path: '/', component: HomePage },
    { name: 'SignUp', path: '/sign-up', component: SignUp },
    { name: 'LogIn', path: '/log-in', component: LogIn }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router