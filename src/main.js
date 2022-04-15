import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router/index';
import Router from 'vue-router';
import axios from 'axios';

Vue.config.productionTip = false
Vue.use(Router);

new Vue({
        el: '#app',
        render: h => h(App),
        store,
        router,
        // beforeCreate(){ //创建之前绑定事件总线
        //   Vue.prototype.$bus=this;
        // }
        beforeCreate() {
            Vue.prototype.$axios = axios
            axios.defaults.baseURL = 'http://127.0.0.1:3000'
                //设置公共接口
            axios.defaults.timeout = 5000
                //超时时间
        }
    })
    //axios基本使用