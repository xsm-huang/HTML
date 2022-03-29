<template>
    <div class="demo">
        <h2>schoolName: {{ name }}</h2>
        <h2>address: {{ address }}</h2>
        <button @click="sendSchoolName">把学校名交给App</button>
    </div>
</template>

<script>
export default {
    name: 'MySchool',
    props: ['getSchoolName'],
    data() {
        return {
            name: '华师',
            address: '南海',
        };
    },
    methods: {
        sendSchoolName() {
            this.getSchoolName(this.name);
        },
    },
};
</script>

<style>
.demo {
    background-color: aquamarine;
}
</style>
