import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router/index';
import Router from 'vue-router';

Vue.config.productionTip = false
Vue.use(Router);

new Vue({
        el: '#app',
        render: h => h(App),
        store,
        router,

        beforeCreate() {
            // Vue.prototype.$axios = axios
            // axios.defaults.baseURL = 'http://127.0.0.1:3000'
            //     //设置公共接口
            // axios.defaults.timeout = 5000
            //     //超时时间
            Vue.prototype.$bus = this;
        }
    })
    //axios基本使用