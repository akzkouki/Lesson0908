const vm = new Vue({
    el: '#app',
    data:{
        num1:0,
        num2:0,
        ans:0,
    },

    computed:{
        odd_even:function(){
            this.ans = Number(this.num1) + Number(this.num2);
            let odd_even_check = '';
            if(this.ans % 2 == 0){
                odd_even_check = '偶数';
            }else{
                odd_even_check = '奇数';
            }
            return odd_even_check; 
        }
    }
})