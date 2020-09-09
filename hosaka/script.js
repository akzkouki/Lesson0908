const vm = new Vue({
    el: '#app',
    data: {
       
        inp1: "",
        inp2: "",
    },
    methods:  {

      
    },
    computed:{
        sum: function(){
        return Number(this.inp1) + Number(this.inp2)
        },
        
    },

});