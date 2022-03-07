import {createRouter, createWebHistory} from "vue-router";
import AboutPage from "@/pages/AboutPage.vue";
import HomePage from "@/pages/HomePage.vue";
import ContactPage from "@/pages/ContactPage.vue";

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage
    },
    {
        path: '/contacts',
        name: 'ContactPage',
        component: ContactPage
    },

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;