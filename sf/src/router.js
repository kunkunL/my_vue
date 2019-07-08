import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from './pages/HomePage'
import questions from './pages/questions'
import blogs from './pages/blogs'
import lives from './pages/lives'
import more from './pages/more'
import detail from './pages/detail'

import recommend from './components/homepage/recommend'
import hosting from './components/homepage/hosting'
import news from './components/homepage/news'
import technology from './components/homepage/technology'



Vue.use(VueRouter)

let routes = [{
        path: '/',
        name: 'home',
        redirect: '/homepage'
    },
    {
        path: '/homepage',
        name: 'homepage',
        component: HomePage,
        redirect: '/homepage/recommend',
        children: [{
                path: 'recommend',
                name: 'recommend',
                meta: 1,
                component: recommend
            },
            {
                path: 'hosting',
                name: 'hosting',
                meta: 2,
                component: hosting
            },
            {
                path: 'news',
                name: 'news',
                meta: 3,
                component: news
            },
            {
                path: 'technology',
                name: 'technology',
                meta: 4,
                component: technology
            }
        ]
    },
    {
        path: '/questions',
        name: 'questions',
        component: questions
    },
    {
        path: '/blogs',
        name: 'blogs',
        component: blogs
    },
    {
        path: '/lives',
        name: 'lives',
        component: lives
    },
    {
        path: '/more',
        name: 'more',
        component: more
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: detail
    }
]

let router = new VueRouter({
    routes
})

export default router