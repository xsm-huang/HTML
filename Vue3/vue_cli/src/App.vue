<template>
    <div>
        <h2>App 组件</h2>
        <button @click="sayHello">{{ name }} {{ age }}</button>
    </div>
</template>

<script>
export default {
    name: 'App',
    setup() {
        let name = 'xsm';
        let age = 18;

        function sayHello() {
            alert(`hello ${name}`);
        }
        return {
            name,
            age,
            sayHello,
        };
    },
};
</script>
