<template>
  <div class="task">
    <div class="task-body">
      <div class="task-body_title">
        <p class="default-text">{{ task.title }}</p>
        <button class="btn btn-edit">Edit</button>
      </div>
      <edit-task-item />
      <div class="task-body_description">
        <p class="default-text">{{ task.description }}</p>
        <button class="btn btn-edit">Edit</button>
      </div>
      <edit-task-item />
    </div>
    <button class="btn delete-task" @click="deleteTaks">delete</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import editTaskItem from "./edit-task-item.vue";

export default {
  components: { editTaskItem },
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
  .edit-textfield {
    border: 1px solid #ccc;
    padding: 5px 20px;
    border-radius: 5px;
    margin-top: 10px;
  }
  .delete-task {
    position: absolute;
    right: 10px;
    top: 10px;
  }
}
</style>
