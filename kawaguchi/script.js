const vm = new Vue({
    el:'#app',

    data:{
        first: 0,
        second: 0,
        isEven: "",
    },

    computed:{
        Adder: function(){
            if(isNaN(parseFloat(this.first)) === false && isNaN(parseFloat(this.second)) === false){
                let add = parseFloat(this.first) + parseFloat(this.second)
                if(add % 2 === 0){
                    this.isEven = "偶数"
                }
                else{
                    this.isEven = "奇数"
                }
                return add;
            }
            else{
                this.isEven = "";
                return 0;
            }
        }
    },
});

