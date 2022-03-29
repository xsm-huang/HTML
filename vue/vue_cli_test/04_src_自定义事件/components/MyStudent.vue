<template>
    <div class="demo">
        <h2>name: {{ name }}</h2>
        <h2>sex: {{ sex }}</h2>
        <button @click="sendStudentName">把学生名交给App</button>
        <button @click="unbind">解绑自定义事件</button>
    </div>
</template>

<script>
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
        sendStudentName() {
            // 触发 student 组件实例对象上的 getName 事件
            this.$emit('getName', this.name);
        },
        unbind() {
            this.$off('getName'); // 解绑一个自定义事件
            // this.$off(); // 解绑所有自定义事件
        },
    },
};
</script>

<style lang="less" scoped>
.demo {
    background-color: pink;
}
</style>
