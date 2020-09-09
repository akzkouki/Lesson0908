const vm = new Vue({
    el: '#app',
    data: {
        value: 'コマンド？',
        history: [],
    },
    methods: {
        o(){
            this.value = 'おはよう';
            this.history.push('おはよう');
        },
        k(){
            this.value = 'こんにちは';
            this.history.push('こんにちは');
        },
        s(){
            this.value = 'さようなら';
            this.history.push('さようなら');
        },
        Del(){
            this.value = '削除';
            this.history.shift();
        },
        AllDel(){
            this.value = '全削除';
            this.history.length = 0;
        },
    },
});