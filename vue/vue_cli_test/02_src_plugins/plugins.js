import Vue from 'vue';

export default {
    install(Vue) {
        console.log('plugins', Vue);

        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200,
                };
            },
        });
    },
};
