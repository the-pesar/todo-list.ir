<template>
  <n-grid cols="1 s:1 m:2 l:2 xl:3 2xl:3" responsive="screen" x-gap="12">
    <n-grid-item class="mx-4 2xl:mx-4">

      <TodoColumn title="Low 🐼🍋" :todos="tStore.lowTodos" type="low" />

    </n-grid-item>
    <n-grid-item class="mx-4 2xl:mx-4">

      <TodoColumn title="Medium 🐨💎" :todos="tStore.mediumTodos" type="medium" />

    </n-grid-item>
    <n-grid-item class="mx-4 2xl:mx-4">

      <TodoColumn title="High 🐻🍭" :todos="tStore.highTodos" type="high" />

    </n-grid-item>
  </n-grid>
  <!-- <AbsoluteAd></AbsoluteAd> -->
</template>

<script setup>
import { useTodosStore } from "@/stores/todos";

import TodoColumn from "@/components/Todos/TodoColumn.vue";
// import AbsoluteAd from "@/components/AbsoluteAd.vue";

const tStore = useTodosStore();
</script>