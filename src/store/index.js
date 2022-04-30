import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);
const state = {
    carList: []
}
const getters = {
    carList(state) {
        return state.carList
    },
    carLength(state) {
        return state.carList.length;
    },

    totalPrice(state) {
        return '￥' + state.carList.filter(item => {
            return item.checked
        }).reduce((preValue, item) => {
            return preValue + item.count * item.newPrice
        }, 0).toFixed(2)
    },
    totalCount(state) {
        return state.carList.filter(item => {
            console.log("totalCount", item.checked);
            return item.checked
        }).reduce((preValue, item) => {
            return preValue + item.count
        }, 0)
    }
}
const actions = {
    addToCar(context, value) {
        return new Promise((resolve) => {
            const oldProduct = context.state.carList.find(item =>
                item.iid === value.iid)
            if (oldProduct) {
                context.commit('add_counter', oldProduct)
                resolve('商品数量+1');
            } else {
                value.count = 1;
                context.commit('add_to_car', value)
                resolve('添加成功');
            }
            console.log('添加成功');
        })

    },
    deleteItem(context) {
        return new Promise((resolve) => {
            context.commit("delete_item");
            resolve('删除成功');
        });
    },
    getList(context) {
        const localList = JSON.parse(sessionStorage.getItem("carList")) || [];
        context.commit("init_carList", localList);
    },
}
const mutations = {
    add_counter(state, value) {
        value.count++
    },
    add_to_car(state, carItem) {
        state.carList.push(carItem)
    },
    //删除购物车内容
    delete_item(state) {
        console.log(state.carList, state.carList);
        const list = state.carList.filter(item =>
            !item.checked
        );
        state.carList = list;
    },
    less_counter(state, value) {
        if (value.count > 1) {
            value.count--;
        }

    }


    //购物车组件销毁时将数据短暂存入session
    // setList(state) {
    //     sessionStorage.setItem("carList", JSON.stringify(state.carList))
    //     console.log('setList', state.carList);
    // },
    //进入商品详情时从session中初始化购物车
    // init_carList(state, list) {
    //     if (list !== null) {
    //         state.carList = list;
    //     }
    // }
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store