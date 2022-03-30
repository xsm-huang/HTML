<template>
    <div>
        <button @click="ishow = !ishow">显示/隐藏</button>
        <transition-group appear>
            <h1 v-show="ishow" key="1">hello</h1>
            <h1 v-show="ishow" key="2">hello</h1>
        </transition-group>
    </div>
</template>

<script>
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

.v-enter-active,
.v-leave-active {
    transition: 0.5s linear;
}
/* 
进入的起点，
离开的终点
*/
.v-enter,
.v-leave-to {
    transform: translateX(-100%);
}
/* 
离开的起点，
进入的终点
 */
.v-leave,
.v-enter-to {
    transform: translateX(0);
}
</style>
