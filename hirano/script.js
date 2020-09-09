const vm = new Vue({
    el: '#app',
    data: {
        message: '',
        history: [],
    },
    methods: {
        output(){
            this.history.push(this.message);
        },
    },
});