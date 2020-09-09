const vm = new Vue({
    el: "#app",
    data: {
        message: 0,
        message2: 0,
        
    },

    computed: {
        // 算出 getter 関数
       resultNum: function () {
          // `this` は vm インスタンスを指します
          return parseInt(this.message) + parseInt(this.message2)
        }
      }
});
