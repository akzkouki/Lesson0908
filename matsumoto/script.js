const vm = new Vue({
    el: '#app',
    data:{
        num1:0,
        num2:0,
        chat_history: [],
        good:false,
        retweet:false,
    },

    methods: {
        
    },

    computed:{
        calculation:function(){

            return Number(this.num1) + Number(this.num2); 
        }
    }
})