const vm = new Vue({
    el: '#app',
    data:{
        textInput:'',
        chat_history: [],
    },

    methods: {
        // hello(){
        //     this.chat_history.push('こんにちは');
        // },
        // morning(){
        //     this.chat_history.push('おはよう');
        // },
        // bye(){
        //     this.chat_history.push('さようなら');
        // },
        // clear(){
        //     this.chat_history = [];
        // },
        // delete_item(index){
        //     this.chat_history.splice(index,1);
        // },
        sending() {
            this.chat_history.push(this.textInput);
            this.textInput = '';
        }
    },

    computed: {

    }
})