<template>
  <div
    @dragleave="dragLeaveColumn"
    @dragover.prevent="dragOverColumn"
    @drop="dropColumn($event, force)"
    @dragenter.prevent
  >
    <n-divider title-placement="center">
      <span class="text-lg">{{ title }}</span>
    </n-divider>
    <n-collapse>
      <n-grid cols="1 s:1 m:1 l:1 xl:1 2xl:5" responsive="screen" x-gap="12">
        <n-grid-item class="mb-2" v-for="t in todos" :key="t.id">
          <Todo
            :todo="t"
            @updateTodo="updateTodoEvent"
            draggable="true"
            @dragstart="dragTodo($event, t.id)"
            @dragend="xDrag"
          />
        </n-grid-item>
        <n-grid-item>
          <n-card
            v-if="Store.dragOver === force"
            class="h-[47.6px] bg-gray-200 opacity-50"
          />
        </n-grid-item>
        <n-grid-item v-if="showCreateTodo">
          <component
            :is="CreateTodo"
            :force="force"
            :type="type"
            @close="showCreateTodo = false"
          ></component>
        </n-grid-item>
      </n-grid>
      <div v-show="!showCreateTodo" class="flex justify-center">
        <span
          class="plus-todo text-5xl cursor-pointer"
          @click="showCreateTodo = true"
          >+</span
        >
      </div>
    </n-collapse>
  </div>
  <UpdateTodo v-model:show="showUpdateModal" :modal="true"></UpdateTodo>
</template>


<script setup>
import { defineProps, ref } from "vue";
import { useRouter } from "vue-router";
import { useTodosStore } from "@/stores/todos";
import { useStore } from "@/stores";

import Todo from "@/components/Todo.vue";
import CreateTodo from "@/components/CreateTodo";
import UpdateTodo from "@/components/UpdateTodo";

const props = defineProps({
  todos: Object,
  title: String,
  force: String,
  type: String,
});

const Store = useStore();
const tStore = useTodosStore();
const router = useRouter();

const showCreateTodo = ref(false);
const showUpdateModal = ref(false);

const updateTodoEvent = (id) => {
  router.push({ query: { id } });
  showUpdateModal.value = true;
};

const dragTodo = (event, id) => {
  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("todo-id", id);
  const index = tStore.todos.findIndex((v) => v.id === id);
  tStore.todos[index].draging = true;
};

const dropColumn = (event, force) => {
  const id = event.dataTransfer.getData("todo-id");
  const index = tStore.todos.findIndex((v) => v.id === id);
  tStore.todos[index].force = force;
  const tempTodo = tStore.todos[index];
  tStore.todos.splice(index, 1);
  tStore.todos.push(tempTodo);
  Store.dragOver = "";
};

const dragOverColumn = () => {
  Store.dragOver = props.force;
};

const xDrag = () => {
  Store.dragOver = "";
};
</script>