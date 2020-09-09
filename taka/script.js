const vm = new Vue({
    el: '#app',
    data: {
        count: 0,
        messages: [],
    },
    methods: {
        hello() {
            this.messages.push('こんにちは');
        },
        morning() {
            this.messages.push('おはよう');
        },
        goodbye() {
            this.messages.push('さようなら');
        },
        del(index) {
            this.messages.splice(index, 1)
        },
        alldelete() {
            this.messages.splice(0, this.messages.length);
        },
    },
});