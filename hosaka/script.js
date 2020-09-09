const vm = new Vue({
    el: '#app',
    data: {
        message: "",
        history: [],
    },
    methods: {
        add(){
            this.history.push(this.message)
        },
      
    },
});