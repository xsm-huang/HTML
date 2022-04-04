<template>
    <div>
        <button @click="getStudents">请求 students</button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'App',
    methods: {
        getStudents() {
            axios.get('http://localhost:8080/api/students').then(
                (respone) => {
                    console.log('成功', respone);
                },
                (err) => {
                    console.log('失败', err.message);
                }
            );
        },
    },
};
</script>
