export default {
    state: {
        todoList: [],
    },

    mutations: {
        addTasks(state, task) {
            state.todoList.push(task)
        },

        editTask(state, { id, newTaskData }) {
            console.log(id);
            state.todoList.forEach((item) => {
                if (item.id === id) {
                    item.title = newTaskData.title !== '' ? newTaskData.title : task.title
                    item.description = newTaskData.description !== '' ? newTaskData.description : task.description
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