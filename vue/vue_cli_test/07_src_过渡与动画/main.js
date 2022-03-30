// 引入 Vue
import Vue from 'vue';
// 引入 App 组件，它是所有组件的父组件
import App from './App.vue';

// 关闭 Vue 的生产提示
Vue.config.productionTip = false;

// 安装全局事件总线 (不推荐)
/* 
const Demo = Vue.extend({});
const d = new Demo();
Vue.prototype.$bus = d; 
*/

// 创建 vm
new Vue({
    render: (h) => h(App),
    beforeCreate() {
        // Vue.prototype.$bus = this; // 安装全局事件总线
    },
}).$mount('#app');
