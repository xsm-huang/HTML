<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyWord" />&nbsp;
            <button @click="searchUsers">Search</button>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
export default {
    name: 'VSearch',
    data() {
        return {
            keyWord: '',
        };
    },
    methods: {
        searchUsers() {
            this.$bus.$emit('updataList', {
                isFirst: false,
                isLoading: true,
                errMsg: '',
                users: [],
            });
            axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                (response) => {
                    this.$bus.$emit('updataList', {
                        isLoading: false,
                        errMsg: '',
                        users: response.data.items,
                    });
                },
                (error) => {
                    this.$bus.$emit('updataList', {
                        isLoading: false,
                        errMsg: error,
                        users: [],
                    });
                }
            );
        },
    },
};
</script>

<style></style>
