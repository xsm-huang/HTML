<template>
    <div class="app">
        <h1>{{ msg }}</h1>
        <MySchool />
        <MyStudent />
    </div>
</template>

<script>
// 引入组件
import MySchool from './components/MySchool.vue';
import MyStudent from './components/MyStudent.vue';

export default {
    name: 'App',
    components: { MySchool, MyStudent },
    data() {
        return {
            msg: 'hello',
        };
    },
};
</script>

<style>
.app {
    background-color: antiquewhite;
    padding: 10px;
}
</style>
