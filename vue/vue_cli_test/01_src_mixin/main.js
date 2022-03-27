// 引入 Vue
import Vue from 'vue';
// 引入 App 组件，它是所有组件的父组件
import App from './App.vue';

// 引入全局混合
import { mixin1, mixin2 } from './mixin';

// 关闭 Vue 的生产提示
Vue.config.productionTip = false;

Vue.mixin(mixin1);
Vue.mixin(mixin2);

// 创建 vm
new Vue({
    render: (h) => h(App),
}).$mount('#app');
