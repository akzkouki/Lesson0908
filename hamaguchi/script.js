const vm = new Vue({
    el: "#app",
    data: {
        message: "",
        history: [],
    },

    methods: {
        kon() {
            this.history.push(this.message);
        },
        
    },
});
