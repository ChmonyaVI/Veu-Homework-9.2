import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import InformationPage from '@/views/InformationPage.vue'
import CompanyActions from '@/views/CompanyActions.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    },
    {
        path: '/information',
        name: 'information',
        component: InformationPage,
    },
    {
        path: '/company:companyID?',
        name: 'company',
        component: CompanyActions,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
