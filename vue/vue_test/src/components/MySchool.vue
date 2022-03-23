// 组件的结构 ==============================
<template>
    <div class="demo">
        <h2>学校名称: {{ name }}</h2>
        <h2>学校地址: {{ address }}</h2>
    </div>
</template>

// 组件交互相关的代码 (数据 \ 方法等) =====
<script>
export default {
    data() {
        return {
            name: '华师',
            address: '南海',
        };
    },
};
</script>

// 组件样式 ==============================
<style>
.demo {
    background-color: orange;
}
</style>
