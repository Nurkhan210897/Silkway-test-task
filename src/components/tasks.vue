<template>
  <div class="tasks col-6" v-if="tasks.length">
    <task-item v-for="(item, index) in tasks" :key="index" :task="item" :index="index"/>
  </div>
  <div v-else>
    <h3>No tasks</h3>
  </div>
</template>

<script>
import taskItem from "@/components/task-item.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    taskItem,
  },
  computed: {
    ...mapGetters({
      tasks: 'getTodoList'
    }),
  },
};
</script>

<style></style>
