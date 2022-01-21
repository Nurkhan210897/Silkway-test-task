<template>
  <div class="edit-task">
    <input
      type="text"
      class="edit-textfield"
      @input="inputHandler($event.target.value)"
    />
    <button class="btn btn-save" @click="$emit('saveNewFieldValues')">Save</button>
  </div>
</template>

<script>
export default {
  methods: {
    inputHandler(e) {
      this.$emit("input", e);
    },
  },
};
</script>

<style></style>
