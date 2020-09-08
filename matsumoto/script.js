const vm = new Vue({
    el: '#app',
    data:{
        value: 0,
        chat_history: [],
    },

    methods: {
        hello(){
            this.chat_history.push('こんにちは');
        },
        morning(){
            this.chat_history.push('おはよう');
        },
        bye(){
            this.chat_history.push('さようなら');
        },
        clear(){
            this.chat_history = [];
            // this.chat_history.splice(0, this.chat_history.length);
        },
        delete_item(index){
            this.chat_history.splice(index,1);
        },
    },

    computed: {

    }
})