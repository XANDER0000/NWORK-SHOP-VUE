import {createRouter, createWebHistory} from "vue-router";
import AboutPage from "@/pages/AboutPage.vue";
import HomePage from "@/pages/HomePage.vue";
import ContactPage from "@/pages/ContactPage.vue";
import ProductPage from "@/pages/ProductPage.vue";

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
    {
        path: '/products',
        name: 'ProductPage',
        component: ProductPage
    },

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})


export default router;