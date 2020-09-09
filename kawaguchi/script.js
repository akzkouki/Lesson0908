const vm = new Vue({
    el:'#app',

    data:{
        first: 0,
        second: 0,
    },

    computed:{
        Adder: function(){
            if(isNaN(parseFloat(this.first)) === false && isNaN(parseFloat(this.second)) === false){
                return parseFloat(this.first) + parseFloat(this.second);
            }
            else{
                return 0;
            }
        }
    },


});

