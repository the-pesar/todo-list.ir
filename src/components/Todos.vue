<template>
  <n-grid cols="2 s:2 m:2 l:3 xl:5 2xl:5" responsive="screen" x-gap="12">
    <n-grid-item class="my-2 mx-4" v-for="t in store.sortedTodos" :key="t._id">
      <Todo :todo="t"></Todo>
    </n-grid-item>
  </n-grid>

  <n-button class="fixed right-8 bottom-8 p-7 text-2xl" type="primary" size="large"
    @click="router.push({ name: 'addTodo' })" circle>
    +
  </n-button>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStore } from "@/stores";
import Todo from '@/components/Todo.vue'
const router = useRouter();
const store = useStore();
</script>