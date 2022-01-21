<template>
  <div class="task">
    <div class="task-body">
      <div class="task-item">
        <div class="task-body_title">
          <p class="default-text">{{ task.title }}</p>
          <button
            class="btn btn-edit"
            @click.stop="changeFieldValues(task.title)"
          >
            Edit
          </button>
        </div>
        <edit-task-item
          v-click-outside="closeItem"
          v-if="fieldToСhange(task.title)"
          @saveNewFieldValues="saveNewFieldValues(task.id)"
          v-model="newTitle"
        />
      </div>

      <div class="task-item" v-if="task.description">
        <div class="task-body_description">
          <p class="default-text">{{ task.description }}</p>
          <button
            class="btn btn-edit"
            @click.stop="changeFieldValues(task.description)"
          >
            Edit
          </button>
        </div>
        <edit-task-item
          v-click-outside="closeItem"
          v-if="fieldToСhange(task.description)"
          @saveNewFieldValues="saveNewFieldValues(task.id)"
          v-model="newDescription"
        />
      </div>
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
    selectedField: null,
  }),

  methods: {
    ...mapMutations(["deleteTask", "editTask"]),

    deleteTaks() {
      this.deleteTask(this.index);
    },

    changeFieldValues(data) {
      this.selectedField = data;
    },

    fieldToСhange(data) {
      if (this.selectedField === data) {
        return true;
      }
    },

    saveNewFieldValues(id) {
      this.selectedField = null;
      let newTaskValues = {
        title: this.newTitle,
        description: this.newDescription,
      };
      this.editTask({ id, newTaskValues });
    },

    closeItem() {
      this.selectedField = null;
    },
  },
};
</script>

<style lang="scss">
.task {
  border: 1px solid #ccc;
  position: relative;
  margin-bottom: 20px;
  &-item {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &-body {
    padding: 20px;
    &_title {
      font-size: 1.5em;
      margin-bottom: 10px;
      display: flex;
      .btn-edit {
        margin-left: 15px;
      }
    }
    &_description {
      font-size: 1em;
      display: flex;
      margin-bottom: 10px;
      .btn-edit {
        margin-left: 15px;
      }
    }
  }
  .edit-textfield {
    border: 1px solid #ccc;
    padding: 5px 10px;
    border-radius: 5px;
  }
  .delete-task {
    position: absolute;
    right: 10px;
    top: 10px;
  }
}
</style>
