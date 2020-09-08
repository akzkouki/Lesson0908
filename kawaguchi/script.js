const vm = new Vue({
    el:'#app',

    data:{
        history: [],
    },

    methods:{
        kon(){
            this.history.push("こんにちは");
        },
        oha(){
            this.history.push("おはよう");
        },
        sayo(){
            this.history.push("さようなら");
        },
    },


});