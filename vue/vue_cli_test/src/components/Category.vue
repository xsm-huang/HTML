<template>
    <div class="category">
        <h3>{{ title }}</h3>
        <slot>
            <ul>
                <li v-for="(item, index) in listData" :key="index">{{ item }}</li>
            </ul>
        </slot>
    </div>
</template>

<script>
export default {
    name: 'VList',
    props: ['listData', 'title'],
};
</script>

<style scoped>
.category {
    float: left;
    background-color: antiquewhite;
    width: 200px;
    height: 300px;
}
h3 {
    text-align: center;
    background-color: aquamarine;
}
</style>
