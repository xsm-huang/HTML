// 引入Vue核心库
import Vue from 'vue';
// 引入Vuex
import Vuex from 'vuex';
// 应用插件
Vue.use(Vuex);

// 准备actions对象 ---- 响应组件中用户的动作
const actions = {
    jia(context, value) {
        context.commit('JIA', value);
    },
    jian(context, value) {
        context.commit('JIAN', value);
    },
};

// 准备mutation对象 ---- 修改state中的值
const mutations = {
    JIA(state, value) {
        state.sum += value;
    },
    JIAN(state, value) {
        state.sum -= value;
    },
    ADD_PERSON(state, value) {
        state.personList.push(value);
    },
};

// 准备state对象 ---- 保存具体的数据
const state = {
    sum: 0,
    personList: [{ id: '001', name: 'xsm' }],
};

const getters = {
    bigSum(state) {
        return state.sum * 10;
    },
};

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
});
