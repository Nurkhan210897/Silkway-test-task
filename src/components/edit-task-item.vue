<template>
  <div class="edit-task">
    <input
      type="text"
      class="edit-textfield"
      @input="inputHandler($event.target.value)"
    />
    <button class="btn btn-save" @click="editTasks(task.id)">Save</button>
  </div>
</template>

<script>
export default {
  methods: {
    inputHandler(e) {
      this.$emit("input", e);
    },
    editTasks(id) {
      let newTaskData = {
        title: this.newTitle,
        description: this.newDescription,
      };
      this.editTask({ id, newTaskData });
    },
  },
};
</script>

<style></style>
