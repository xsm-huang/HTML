<template>
    <div class="demo">
        <h2>schoolName: {{ name }}</h2>
        <h2>address: {{ address }}</h2>
    </div>
</template>

<script>
export default {
    name: 'MySchool',
    data() {
        return {
            name: '华师',
            address: '南海',
        };
    },
    methods: {
        // 自定义事件回调
        getData(data) {
            console.log('school get data: ' + data);
        },
    },
    mounted() {
        // 绑定自定义事件
        this.$bus.$on('getData', this.getData);
    },
    beforeDestroy() {
        // 解绑自定义事件
        this.$bus.$off('getData');
    },
};
</script>

<style>
.demo {
    background-color: aquamarine;
}
</style>
