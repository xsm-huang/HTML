// 引入组件
import VAbout from '../pages/VAbout.vue';
import VHome from '../pages/VHome.vue';
import HomeNews from '../pages/HomeNews.vue';
import HomeMessage from '../pages/HomeMessage.vue';
import HomeMessageDetail from '../pages/HomeMessageDetail.vue';

// 引入路由器
import VueRouter from 'vue-router';

// 创建并暴露一个路由器
const router = new VueRouter({
    mode: 'history',
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
                    children: [
                        {
                            meta: { isAuth: true },
                            name: 'detail',
                            path: 'detail/:id/:title',
                            component: HomeMessageDetail,
                        },
                    ],
                },
            ],
        },
    ],
});
// 前置路由守卫
router.beforeEach((to, from, next) => {
    if (to.meta.isAuth) {
        if (localStorage.username === 'xsm') next();
        else alert('看不了');
    } else {
        next();
    }
});
export default router;
