const vm = new Vue({
    el: '#app',
    data: {
        history: ['initial'],
    },
    methods: {
        hello() {
            this.history.push('こんにちは');
        },
        morning() {
            this.history.push('おはよう');
        },
        bye() {
            this.history.push('さようなら')
        },
        del(index) {
            this.history.splice(index, 1);
        },
        clear() {
            this.history.splice(0, this.history.length);
        }
    }
});