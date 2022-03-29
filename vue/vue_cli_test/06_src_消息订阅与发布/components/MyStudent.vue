<template>
    <div class="demo">
        <h2>name: {{ name }}</h2>
        <h2>sex: {{ sex }}</h2>
        <button @click="sendData">发送数据</button>
    </div>
</template>

<script>
import pubsub from 'pubsub-js';

export default {
    name: 'MyStudent',
    data() {
        return {
            name: 'xsm',
            sex: 'woman',
            x: 666,
        };
    },
    methods: {
        sendData() {
            // this.$bus.$emit('getData', this.name);
            pubsub.publish('studentName', this.name);
        },
    },
};
</script>

<style lang="less" scoped>
.demo {
    background-color: pink;
}
</style>
