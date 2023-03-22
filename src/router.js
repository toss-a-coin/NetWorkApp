import {createRouter, createWebHistory} from 'vue-router';
const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import(/*webpackChunkName: "LoginPage"*/ '@/pages/LoginPage.vue')
    },

    {
        path: '/devices',
        name: 'Devices',
        component: () => import(/*webpackChunkName: "DevicesPage"*/ '@/pages/DevicesPage.vue'),
    },

    {
        path: '/terminal',
        name: 'Terminal',
        component: () => import(/*webpackChunkname: "TerminalPage"*/'@/pages/TerminalPage.vue')
    }

    // {
    //     path: '/:pathMatch(.*)*', 
    //     redirect: '/'
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;