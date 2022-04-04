<template>
    <div class="content">
        <Category :listData="games" title="game">
            <img
                src="https://tse1-mm.cn.bing.net/th/id/R-C.01abfe438dadbf3d8a3da3ba1df99167?rik=ptdLbE8nvcmF3w&riu=http%3a%2f%2fimg.crcz.com%2fallimg%2f202002%2f12%2f1581507736360176.jpg&ehk=Zfkq0H02k4LQJebs4t1%2bSDmzuEpWyhpjEcaIb2Y84KQ%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
            />
        </Category>
        <Category :listData="flowers" title="flowers"></Category>
        <Category :listData="foods" title="foods">
            <img
                src="https://tse1-mm.cn.bing.net/th/id/R-C.01abfe438dadbf3d8a3da3ba1df99167?rik=ptdLbE8nvcmF3w&riu=http%3a%2f%2fimg.crcz.com%2fallimg%2f202002%2f12%2f1581507736360176.jpg&ehk=Zfkq0H02k4LQJebs4t1%2bSDmzuEpWyhpjEcaIb2Y84KQ%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
            />
        </Category>
    </div>
</template>

<script>
import Category from './components/Category.vue';
export default {
    name: 'App',
    components: { Category },
    data() {
        return {
            games: ['game1', 'game2', 'game3', 'game4'],
            flowers: ['flowers1', 'flowers2', 'flowers3', 'flowers4'],
            foods: ['foods1', 'foods2', 'foods3', 'foods4'],
        };
    },
};
</script>
<style>
.content {
    display: flex;
    justify-content: space-around;
}
img {
    width: 100%;
}
</style>
