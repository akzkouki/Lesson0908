const vm = new Vue({
    el:'#app',

    data:{
        history: [],
        VueTxt: '',
    },

    methods:{
        tweet(){
            this.history.push(this.VueTxt);
        },
    },


});