const vm = new Vue({
    el: '#app',
    data: {
        first: 0,
        second: 0,
    },
    computed: {
        sum: function (){
            return this.first + this.second;
        },
        rem: function (){
            return this.sum % 2;
        },
    }
});