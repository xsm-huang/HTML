export const mixin1 = {
    methods: {
        showName() {
            console.log(this.name);
        },
    },
    mounted() {
        console.log('hello world');
    },
};
export const mixin2 = {
    data() {
        return {
            x: 100,
            y: 200,
        };
    },
};
