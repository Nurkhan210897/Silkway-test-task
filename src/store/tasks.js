export default {
    state: {
        todoList: [],
    },

    mutations: {
        addTasks(state, task) {
            state.todoList.push(task)
        },

        editTask(state, { id, newTaskValues }) {
            state.todoList.forEach((item) => {
                let title = newTaskValues.title !== '' ? newTaskValues.title : item.title
                let description = newTaskValues.description !== '' ? newTaskValues.description : item.description

                if (item.id === id) {
                    item.title = title
                    item.description = description
                }
            })
        },

        deleteTask(state, index) {
            state.todoList.splice(index, 1)
        },
    },

    actions: {

    },

    getters: {
        getTodoList: state => state.todoList,
    }
}