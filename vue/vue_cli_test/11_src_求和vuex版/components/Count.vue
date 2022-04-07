<template>
    <div>
        <h1>当前求和为：{{ $store.state.sum }}</h1>
        <h1>当前求和放大10倍为：{{ bigSum }}</h1>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd">当前求和为奇数则加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
export default {
    name: 'Count',
    data() {
        return {
            n: 1, // 用户选择的数字
            // sum: 0, // 当前的和
        };
    },
    computed: {
        // ...mapState({ sum: 'sum' }),
        ...mapState(['sum']),
        ...mapGetters(['bigSum']),
    },
    methods: {
        // increment() {
        //     // 如果 actions 中没有任何操作，可以直接调用 commit
        //     // this.$store.dispatch('jia', this.n);
        //     this.$store.commit('JIA', this.n);
        // },
        // decrement() {
        //     this.$store.commit('jian', this.n);
        // },
        ...mapMutations({ increment: 'JIA', decrement: 'JIAN' }),
        ...mapActions(['jia']),
        incrementOdd() {
            if (this.$store.state.sum % 2) {
                // this.$store.dispatch('jia', this.n);
                this.jia(this.n);
            }
        },
        incrementWait() {
            setTimeout(() => {
                // this.$store.dispatch('jia', this.n);
                this.jia(this.n);
            }, 1000);
        },
    },
};
</script>
<style>
button {
    margin: 5px;
}
</style>
