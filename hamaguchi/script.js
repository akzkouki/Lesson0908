const vm = new Vue({
    el: "#app",
    data: {
        value: 0,
        history: [],
    },

    methods: {
        kon() {
            this.history.push('こんにちは');
        },
        oha() {
            this.history.push('おはよう');
        },
        sayo() {
            this.history.push('さようなら');
        },
        alldel() {
            this.history = [];
        },
    },
});
