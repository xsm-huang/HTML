<template>
    <div>
        <h2 @click="showName">schoolName: {{ name }}</h2>
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
};
</script>
