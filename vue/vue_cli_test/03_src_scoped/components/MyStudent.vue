<template>
    <div class="demo">
        <h2 class="a">name: {{ name }}</h2>
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
};
</script>

<style lang="less" scoped>
.demo {
    background-color: pink;
    .a {
        color: aquamarine;
    }
}
</style>
