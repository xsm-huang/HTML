<template>
    <div>
        <button @click="ishow = !ishow">显示/隐藏</button>
        <transition name="one" appear>
            <h1 v-show="ishow">hello</h1>
        </transition>
        <transition>
            <h2 v-show="ishow">hello</h2>
        </transition>
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
h2 {
    background-color: skyblue;
}
.one-enter-active {
    animation: animate 1s linear;
}
.one-leave-active {
    animation: animate 1s linear reverse;
}
.v-enter-active {
    animation: animate 0.5s linear;
}
.v-leave-active {
    animation: animate 0.5s linear reverse;
}
@keyframes animate {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
}
</style>
