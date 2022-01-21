<template>
  <div class="container">
    <div class="home-page">
      <div class="title">
        <h1>Tasks</h1>
      </div>
      <div class="tasks-wrp">
        <add-task />
        <tasks />
      </div>
    </div>
  </div>
</template>

<script>
import addTask from "@/components/add-task.vue";
import tasks from "@/components/tasks.vue";
export default {
  components: {
    addTask,
    tasks,
  },
};
</script>

<style lang="scss">
.home-page{
  padding: 50px 0;
}
  </style>
