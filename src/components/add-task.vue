<template>
  <div class="col-6">
    <form action="" class="form">
      <input
        type="text"
        placeholder="Task title"
        class="form_textfield"
        v-model="title"
      />
      <textarea
        class="form_textfield"
        rows="7"
        cols=""
        placeholder="task description"
        v-model="description"
      ></textarea>
      <button class="btn btn-submit" @click.prevent="addTask">
        Submit form
      </button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data: () => ({
    taskId: 0,
    title: "",
    description: "",
  }),

  methods: {
    ...mapMutations({
      addTasks: "addTasks",
    }),
    addTask() {
      this.taskId++;

      const task = {
        id: this.taskId,
        title: this.title,
        description: this.description,
      };

      if (this.title.length) {
        this.addTasks(task);
      }
      
      this.title = "";
      this.description = "";
    },
  },
};
</script>

<style lang="scss">
.form {
  padding: 0 50px;
  &_textfield {
    display: block;
    border: 1px solid #ccc;
    padding: 10px 20px;
    border-radius: 5px;
  }
  input,
  textarea {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>
