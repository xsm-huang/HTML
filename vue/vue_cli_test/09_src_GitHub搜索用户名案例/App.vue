<template>
    <div class="container">
        <VSearch />
        <VList />
    </div>
</template>

<script>
import VSearch from './components/VSearch.vue';
import VList from './components/VList.vue';
export default {
    components: { VSearch, VList },
    name: 'App',
    comments: [VSearch, VList],
};
</script>
