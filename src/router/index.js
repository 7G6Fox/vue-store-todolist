import VueRouter from "vue-router"
import App from '../App'
import home from 'view/my-index'
import login from 'components/user-login'
import write from 'view/home/h-write'
import blog from './blog'
import shop from './shop'
const shopMall = () =>
    import ('view/demo/shopMall.vue'); //懒加载页面
const musicPlay = () =>
    import ('view/demo/musicPlay');
const todoList = () =>
    import ('view/demo/todoList');
export default new VueRouter({
    routes: [{ //配置顶级路由，对应index.html
        path: '/',
        component: App,
        children: [{
                path: '',
                redirect: 'home'
            },
            {
                path: '/home',
                component: home,
                children: blog
            }, {
                path: '/toList',
                component: todoList
            }, {
                path: '/toMall',
                component: shopMall,
                children: shop
            },
            {
                path: '/toMusic',
                component: musicPlay
            }, {
                path: '/toLogin',
                component: login
            },
            {
                path: '/write',
                component: write
            }
        ]

    }],
    mode: 'history',
    linkActiveClass: 'route-active'
});