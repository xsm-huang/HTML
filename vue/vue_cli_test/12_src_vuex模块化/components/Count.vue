<template>
    <div>
        <h1>当前求和为：{{ sum }}</h1>
        <h1>当前求和放大10倍为：{{ bigSum }}</h1>
        <h3>person人数为 {{ personList.length }}</h3>
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
        };
    },
    computed: {
        ...mapState('countAbout', { sum: 'sum' }),
        ...mapState('personAbout', ['personList']),
        ...mapGetters('countAbout', ['bigSum']),
    },
    methods: {
        ...mapMutations('countAbout', { increment: 'JIA', decrement: 'JIAN' }),
        ...mapActions('countAbout', ['jia']),
        incrementOdd() {
            if (this.sum % 2) {
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
<style scoped>
button {
    margin: 5px;
}
h3 {
    color: red;
}
</style>
