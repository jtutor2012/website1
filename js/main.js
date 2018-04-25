/**
 * Created by Masashi on 2016/02/05.
 */

new Vue({
    el: '#app',
    data: {
        newTodo:'',
        todos:[
            {text:'Add some todos'}
        ]
    },
    methods:{
        addTodo: function(){
            var text = this.newTodo.trim();
            if(text)
            {
                this.todos.push({text:text});
                this.newTodo = '';
            }
        },
        removeTodo: function(index){
            this.todos.splice(index, 1);
        }
    }
});



var exampleData = {
    name: 'Vue js'
}

var exampleVM = new Vue({
    el: '#example-1',
    data: exampleData
});

var exampleVM2 = new Vue({
    el:'#example-2',
    data:{
        greeting: false
    }
});