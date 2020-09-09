const vm = new Vue({
    el: '#app',
    data: {
       
        inp1: 0,
        inp2: 0,
    },
    methods:  {

      
    },
    computed:{
        sum: function(){
        return Number(this.inp1) + Number(this.inp2)
        }
    },
});