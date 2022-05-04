import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router/index';
import Router from 'vue-router';
import toast from '@/components/common/toast/index';
import vueLazyLoad from "vue-lazyload";

Vue.use(toast);

Vue.config.productionTip = false
Vue.use(Router);
Vue.use(vueLazyLoad, {
    preLoad: 1.3,
    error: require("@/assets/imgs/shop/shopLose.png"),
    loading: require("@/assets/imgs/shop/itemLose.png"),
    attempt: 1

});
new Vue({
        el: '#app',
        render: h => h(App),
        store,
        router,
        beforeCreate() {
            //事件总线
            Vue.prototype.$bus = this;
        }
    })
    //axios基本使用