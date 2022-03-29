<template>
    <div class="app">
        <h1>{{ msg }}, 学生姓名: {{ studentName }}</h1>
        <!-- 通过父组件给子组件传递函数类型的 props 实现: 子给父传递数据 -->
        <MySchool :getSchoolName="getSchoolName" />

        <!-- 通过父组件给子组件绑定一个自定义组件 实现: 子给父传递数据 (法一: 使用 v-on 或 @) -->
        <MyStudent @getName="getStudentName" />
        <!-- 通过父组件给子组件绑定一个自定义组件 实现: 子给父传递数据 (法二: 使用 ref) -->
        <MyStudent ref="student" @click.native="show" />
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
            studentName: '',
        };
    },
    methods: {
        getSchoolName(name) {
            console.log('school name is: ' + name);
        },
        getStudentName(name) {
            console.log('student name is: ' + name);
            this.studentName = name;
        },
        show() {
            console.log('原生事件');
        },
    },
    mounted() {
        this.$refs.student.$on('getName', this.getStudentName); // 绑定自定义事件
        // this.$refs.student.$once('getName', this.getStudentName); // 绑定自定义事件 (一次性)
        // 3 秒后绑定事件
        // setTimeout(() => {
        //     this.$refs.student.$on('getName', this.getStudentName);
        // }, 3000);
    },
};
</script>

<style>
.app {
    background-color: antiquewhite;
    padding: 10px;
}
</style>
