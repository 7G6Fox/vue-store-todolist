const shopHome = () =>
    import ('../view/demo/mall/s-home.vue');
const category = () =>
    import ('../view/demo/mall/s-category.vue');
const car = () =>
    import ('../view/demo/mall/s-car.vue');
const shopCentre = () =>
    import ('../view/demo/mall/s-centre.vue');
export default [{
        path: '',
        redirect: 'shopHome'
    },
    {
        name: 'shopHome',
        path: 'shopHome',
        component: shopHome
    }, {
        name: 'category',
        path: 'category',
        component: category
    }, {
        name: 'car',
        path: 'car',
        component: car
    }, {
        name: 'shopCentre',
        path: 'shopCentre',
        component: shopCentre
    }
]