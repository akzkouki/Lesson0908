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
        destroy(){
            this.history = [];
        },
        del(){
            if(this.history.length !== 0){
                this.history.pop();
            }
        },
    },


});