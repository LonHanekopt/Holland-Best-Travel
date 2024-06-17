import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage";
import ContactUsPage from "@/views/ContactUsPage";
import TravelinfoPage from "@/views/TravelInfo";
import HotelsView from "@/views/HotelsPage";
import AmsterdamActivities from "@/views/AmsterdamActivities";
import RotterdamActivities from "./views/RotterdamActivities.vue";
import TheHagueActivities from "./views/TheHagueActivities.vue";
import UtrechtActivities from "./views/UtrechtActivities.vue";

// import notfound from "@/views/404NotFound";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage,
            alias: '/',
            name: 'home'
        },
        {
            path: '/hotels',
            component: HotelsView,
            name: 'hotels'
        },
        {
            path: '/hostels',
            component: HotelsView,
        },
        {
            path: '/airbnb',
            component: HotelsView,
        },
        {
            path: '/contact',
            component: ContactUsPage,
            name: 'contact'
        },
        {
            path: '/travel-info',
            component: TravelinfoPage,
            name: 'travel'
        },
        {
            path: '/amsterdam-activities',
            component: AmsterdamActivities,
            name: 'amsterdam'
        },
        {
            path: '/rotterdam-activities',
            component: RotterdamActivities,
            name: 'rotterdam'
        },
        {
            path: '/hague-activities',
            component: TheHagueActivities,
            name: 'hague'
        },
        {
            path: '/utrecht-activities',
            component: UtrechtActivities,
            name: 'utrecht'
        },
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})

export default router;