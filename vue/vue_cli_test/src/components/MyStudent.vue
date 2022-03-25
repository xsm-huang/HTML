<template>
    <div>
        <h2 @click="showName">name: {{ name }}</h2>
        <h2>sex: {{ sex }}</h2>
    </div>
</template>

<script>
// 引入一个 混合
// import { mixin1, mixin2 } from '../mixin';

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
    // mixins: [mixin1, mixin2],
};
</script>
