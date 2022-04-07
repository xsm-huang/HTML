// 引入组件
import VAbout from '../pages/VAbout.vue';
import VHome from '../pages/VHome.vue';

// 引入路由器
import VueRouter from 'vue-router';

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: VAbout,
        },
        {
            path: '/home',
            component: VHome,
        },
    ],
});
