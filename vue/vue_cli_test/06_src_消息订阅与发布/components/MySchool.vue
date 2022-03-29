<template>
    <div class="demo">
        <h2>schoolName: {{ name }}</h2>
        <h2>address: {{ address }}</h2>
    </div>
</template>

<script>
import pubsub from 'pubsub-js';
export default {
    name: 'MySchool',
    data() {
        return {
            name: '华师',
            address: '南海',
        };
    },
    // methods: {
    //     // 自定义事件回调
    //     getData(data) {
    //         console.log('school get data: ' + data);
    //     },
    // },
    mounted() {
        // 绑定自定义事件
        // this.$bus.$on('getData', this.getData);

        this.pubId = pubsub.subscribe('studentName', (msgName, name) => {
            console.log('接收到发布的 studentName 消息, 回调执行, 接收到的数据: ' + name);
        });
    },

    beforeDestroy() {
        // 解绑自定义事件
        // this.$bus.$off('getData');

        // 取消订阅
        pubsub.unsubscribe(this.pubId);
    },
};
</script>

<style>
.demo {
    background-color: aquamarine;
}
</style>
