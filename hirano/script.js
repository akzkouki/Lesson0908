const vm = new Vue({
    el: '#app',
    data: {
        a: 0,
        b: 0,
    },
    computed: {
        sum: function (){
            return this.a + this.b;
        },
        rem: function (){
            return this.sum % 2;
        },
    }
});