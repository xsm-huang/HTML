// 引入 Vue
import Vue from 'vue';
// 引入 App 组件，它是所有组件的父组件
import App from './App.vue';
// 引入 VueRouter
import VueRouter from 'vue-router';
// 引入一个路由器
import router from './router/index';

// 关闭 Vue 的生产提示
Vue.config.productionTip = false;

// 应用插件
Vue.use(VueRouter);

// 创建 vm
new Vue({
    render: (h) => h(App),
    router: router,
}).$mount('#app');
