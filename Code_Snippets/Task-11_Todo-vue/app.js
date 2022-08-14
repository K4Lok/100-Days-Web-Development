const { createApp } = Vue;

const TodoApp = {
    data() {
        return {
            todos: [],
            enteredInput: '',
            editedTodoId: null
        };
    },
    methods: {
        submitTodo(event) {
            event.preventDefault();

            // not editing
            if(!this.editedTodoId) {
                const todo = {
                    text: this.enteredInput,
                    id: new Date().toISOString()
                };
                this.todos.push(todo);
            }
            // editing todo
            else {
                const todoId = this.editedTodoId;

                const editTodoIndex = this.todos.findIndex( todoItem => {
                    return todoItem.id === todoId;
                });

                this.todos[editTodoIndex].text = this.enteredInput;
                this.editedTodoId = null;
            }

            this.enteredInput = '';
        },
        startEditTodo(todoId) {
            this.editedTodoId = todoId;
            const todo = this.todos.find(todoItem => {
                return todoItem.id === todoId;
            });
            this.enteredInput = todo.text;
        },
        deleteTodo(todoId) {
            this.todos = this.todos.filter( todoItem => {
                return todoItem.id !== todoId;
            });
        }
    },
    async created() {
        let response;
        try {
            response = await fetch('http://localhost:3000/todo');
        }
        catch(error) {
            alert(error);
            return;
        }

        if(!response.ok) {
            alert(repsonse.error);
            return;
        }
        // console.log(await response.json());
        const responseData = await response.json();
        const todos = responseData.todos;

        this.todos = todos;
    }
};

createApp(TodoApp).mount('#todo-app');