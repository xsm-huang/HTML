<template>
    <div>
        <h2 @click="showName">name: {{ name }}</h2>
        <h2>sex: {{ sex }}</h2>
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
    mounted() {
        console.log('hello!!!');
    },
};
</script>
