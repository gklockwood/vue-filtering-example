import { createRouter, createWebHistory } from 'vue-router'
import NotFound from './components/nav/NotFound.vue'
import SimpleSearch from './components/sorting/SimpleSearch.vue'
import SortedList from './components/sorting/SortedList.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            redirect: '/simplesearch',
            component: SimpleSearch
        },
        {
            name: 'simplesearch',
            path: '/simplesearch',
            component: SimpleSearch
        },
        {
            name: 'sortedlist',
            path: '/sortedlist',
            component: SortedList
        },
        {
            path: '/:notFound(.*)',
            components: NotFound
        }
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
        console.log(to, from, savedPosition);
        if (savedPosition) {
            return savedPosition;
        }
        return {
            left: 0,
            top: 0
        }
    }
});

export default router;