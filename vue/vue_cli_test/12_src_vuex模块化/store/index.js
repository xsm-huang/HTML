// 引入Vue核心库
import Vue from 'vue';
// 引入Vuex
import Vuex from 'vuex';
// 应用插件
Vue.use(Vuex);

const countOption = {
    namespaced: true,
    state: { sum: 0 },
    actions: {
        jia(context, value) {
            context.commit('JIA', value);
        },
        jian(context, value) {
            context.commit('JIAN', value);
        },
    },
    mutations: {
        JIA(state, value) {
            state.sum += value;
        },
        JIAN(state, value) {
            state.sum -= value;
        },
    },
    getters: {
        bigSum(state) {
            return state.sum * 10;
        },
    },
};

const personOption = {
    namespaced: true,
    state: {
        personList: [
            { id: '001', name: 'xsm' },
            { id: '002', name: 'sss' },
        ],
    },
    actions: {},
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.push(value);
        },
    },
    getters: {},
};

// 创建并暴露store
export default new Vuex.Store({
    modules: {
        countAbout: countOption,
        personAbout: personOption,
    },
});
