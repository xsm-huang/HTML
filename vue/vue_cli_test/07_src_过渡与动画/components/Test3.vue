<template>
    <div>
        <button @click="ishow = !ishow">显示/隐藏</button>
        <transition-group
            appear
            name="animate__animated animate__bounce"
            enter-active-class="animate__swing"
            leave-active-class="animate__backInUp"
        >
            <h1 v-show="ishow" key="1">hello</h1>
            <h1 v-show="!ishow" key="2">byebye</h1>
        </transition-group>
    </div>
</template>

<script>
import 'animate.css';
export default {
    name: 'Test',
    data() {
        return {
            ishow: true,
        };
    },
};
</script>

<style scoped>
h1 {
    background-color: aquamarine;
}
</style>
