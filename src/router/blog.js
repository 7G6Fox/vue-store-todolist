import index from '../view/home/h-index' //这是homepage默认的首页内容
import comment from '../view/home/h-comment'
const article = () =>
    import ('../view/home/h-article.vue');
const detail = () =>
    import ('../components/arti-detail.vue');
const demo = () =>
    import ('../view/home/h-demo');
export default [{
        path: '',
        redirect: 'index'
    }, {
        path: 'index',
        component: index
    }, {
        path: 'article',
        component: article,
    },
    {
        path: 'demo',
        component: demo
    },
    {
        path: 'comment',
        component: comment
    }, {
        name: 'aDetail',
        path: 'article/detail',
        component: detail
    }
]