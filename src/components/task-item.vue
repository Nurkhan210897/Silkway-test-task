<template>
  <div class="task">
    <div class="task-body">
      <div class="task-body_title">
        <p class="default-text">{{ task.title }}</p>
        <input type="text" v-model="newTitle" />
        <button class="btn btn-edit" @click="editTasks(task.id)" >Edit</button>
      </div>
      <div class="task-body_description">
        <p class="default-text">{{ task.description }}</p>
        <input type="text" v-model="newDescription" />
        <button class="btn btn-edit" @click="editTasks(task.id)" >Edit</button>
      </div>
    </div>
    <button class="btn delete-task" @click="deleteTaks">delete</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    task: {
      type: Object,
      default: () => {},
    },
    index: {
      type: Number,
    },
  },
  data: () => ({
    newTitle: "",
    newDescription: "",
  }),
  methods: {
    ...mapMutations(["deleteTask", "editTask"]),
    editTasks(id) {
      let newTaskData = {
        title: this.newTitle,
        description: this.newDescription,
      };
      this.editTask({id, newTaskData})
    },
    deleteTaks() {
      this.deleteTask(this.index);
    },
  },
};
</script>

<style lang="scss">
.task {
  border: 1px solid #ccc;
  position: relative;
  margin-bottom: 20px;
  &-body {
    padding: 20px;
    &_title {
      font-size: 1.5em;
      margin-bottom: 20px;
    }
    &_name {
      font-size: 1em;
    }
  }
  .delete-task {
    position: absolute;
    right: 10px;
    top: 10px;
  }
}
</style>
