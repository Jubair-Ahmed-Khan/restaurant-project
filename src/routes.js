import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import LogIn from './components/LogIn.vue'
import AddRestaurant from './components/AddRestaurant.vue'
import UpdateRestaurant from './components/UpdateRestaurant.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { name: 'HomePage', path: '/', component: HomePage },
    { name: 'SignUp', path: '/sign-up', component: SignUp },
    { name: 'LogIn', path: '/log-in', component: LogIn },
    { name: 'AddRestaurant', path: '/add-restaurant', component: AddRestaurant },
    { name: 'UpdateRestaurant', path: '/update-restaurant', component: UpdateRestaurant },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router