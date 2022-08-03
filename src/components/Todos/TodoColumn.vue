<template>
  <n-divider title-placement="center">
    <span class="text-lg" v-text="title"></span>
  </n-divider>
  <n-collapse>
    <Todo class="mb-2" v-for="todo in todos" :key="todo.id" :todo="todo" />
    <CreateTodo v-if="showCreateTodo" class="mb-2" :type="type" @create="createTodo($event)" />  
    <PlusButton v-else @click="showCreateTodo = !showCreateTodo" />
  </n-collapse>
  <UpdateTodo v-model:show="showUpdateModal" :modal="true" />
</template>

<script setup>
import { defineProps, ref } from "vue";
// import { useRouter } from "vue-router";
import { useTodosStore } from "@/stores/todos";

import Todo from "@/components/Todos/Todo";
import CreateTodo from "@/components/Todos/CreateTodo";
import UpdateTodo from "@/components/Todos/UpdateTodo";
import PlusButton from "@/components/Todos/PlusButton";

const tStore = useTodosStore();
// const router = useRouter();

defineProps({
  todos: Object,
  title: String,
  type: String,
});


const showCreateTodo = ref(false);
const showUpdateModal = ref(false);

// const updateTodoEvent = (id) => {
//   router.push({ query: { id } });
//   showUpdateModal.value = true;
// };

const createTodo = (todo) => {
  tStore.createTodo(todo);
  showCreateTodo.value = false
}
</script>