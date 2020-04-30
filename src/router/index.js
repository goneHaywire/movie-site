import Vue from 'vue'
import store from '../store/index.js'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ('../views/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/About.vue')
    },
    {
        path: '/movies',
        name: 'Movies',
        component: () =>
            import ('../views/Movies.vue')
    },
    {
        path: '/genres',
        name: 'Genres',
        component: () =>
            import ('../views/Genres.vue'),
        beforeEnter(routeTo, routeFrom, next) {
            NProgress.start()
            if (!store.getters.isGenreAmountsFull)
                store.dispatch('computeGenresWithAmount')
            next()
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((routeTo, routeFrom, next) => {
    window.scrollTo(0, 0)
    NProgress.start()
    next()
})

router.afterEach(() => {
    NProgress.done()
})

export default router