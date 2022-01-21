<template>
  <div class="task ">
    <div class="task-body">
      <div class="task-body_title">
        <p class="default-text">{{ task.title }}</p>
      </div>
      <div class="task-body_description">
        <p class="default-text">{{ task.description }}</p>
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
  methods: {
    ...mapMutations(["deleteTask"]),
    
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
  &-body{
    padding: 20px;
    &_title{
      font-size: 1.5em;
      margin-bottom: 20px;
    }
    &_name{
      font-size: 1em;
    }
  }
  .delete-task{
    position: absolute;
    right: 10px;
    top: 10px;
  }
}
</style>
