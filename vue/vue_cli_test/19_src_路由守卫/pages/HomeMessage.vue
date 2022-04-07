<template>
    <div>
        <ul>
            <li v-for="item in messageList" :key="item.id">
                <!-- 跳转路由并携带query参数，to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail/${item.id}/${item.title}`"> -->
                <!-- 对象写法 -->
                <router-link
                    replace
                    :to="{
                        name: 'detail',
                        params: {
                            id: item.id,
                            title: item.title,
                        },
                    }"
                >
                    {{ item.title }}
                </router-link>
                <button @click="pushShow(item)">push view</button>
                <button @click="replaceShow(item)">replace view</button>
            </li>
        </ul>
        <hr />
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'HomeMessage',
    data() {
        return {
            messageList: [
                { id: '001', title: '消息01' },
                { id: '002', title: '消息02' },
                { id: '003', title: '消息03' },
            ],
        };
    },
    methods: {
        pushShow(item) {
            this.$router.push({
                name: 'detail',
                params: {
                    id: item.id,
                    title: item.title,
                },
            });
        },

        replaceShow(item) {
            this.$router.replace({
                name: 'detail',
                params: {
                    id: item.id,
                    title: item.title,
                },
            });
        },
    },
};
</script>

<style></style>
