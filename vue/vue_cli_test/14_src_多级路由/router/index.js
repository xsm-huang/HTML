// 引入组件
import VAbout from '../pages/VAbout.vue';
import VHome from '../pages/VHome.vue';
import HomeNews from '../pages/HomeNews.vue';
import HomeMessage from '../pages/HomeMessage.vue';

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
            children: [
                {
                    path: 'news',
                    component: HomeNews,
                },
                {
                    path: 'message',
                    component: HomeMessage,
                },
            ],
        },
    ],
});
