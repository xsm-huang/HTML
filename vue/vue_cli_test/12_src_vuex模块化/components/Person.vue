<template>
    <div>
        <h1>人员列表</h1>
        <h3 style="color=red">sum 的值为 {{ sum }}</h3>
        <input type="text" v-model="name" />
        <button @click="addPerson">add</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { nanoid } from 'nanoid';
export default {
    name: 'Person',
    data() {
        return {
            name: '',
        };
    },
    computed: {
        ...mapState('personAbout', ['personList']),
        sum() {
            return this.$store.state.countAbout.sum;
        },
    },
    methods: {
        addPerson() {
            console.log(this.name);
            const personObj = { id: nanoid(), name: this.name };
            // this.$store.commit('ADD_PERSON', personObj);
            this.$store.commit('personAbout/ADD_PERSON', personObj);
            // console.log(personObj);
            this.name = '';
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
