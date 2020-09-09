const vm = new Vue({
    el: '#app',
    data: {
        history: [],
    },
    methods: {
        kon(){
            this.history.push("こんにちは")
        },
        oha(){
            this.history.push("おはよう")
        },
        konban(){
            this.history.push("こんばんは")
        },
        saku(){
           this.history.shift()
        },
      
    },
});