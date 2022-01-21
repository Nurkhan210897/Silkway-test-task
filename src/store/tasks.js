export default {
    state: {
        todoList: [],
    },

    mutations: {
        addTasks(state, task) {
            state.todoList.push(task)
        },
        deleteTask(state, index) {
            state.todoList.splice(index, 1)
        }
    },

    actions: {

    },

    getters: {
        getTodoList: state => state.todoList,
    }
}