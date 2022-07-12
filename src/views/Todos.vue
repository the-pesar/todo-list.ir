<template>
  <n-grid cols="1 s:1 m:2 l:2 xl:3 2xl:3" responsive="screen" x-gap="12">
    <n-grid-item class="mx-4 2xl:mx-6">
      <TodoColumn
        title="Today 🐼🍋"
        :todos="tStore.todayTodos"
        type="today"
      />
    </n-grid-item>
    <n-grid-item class="mx-4 2xl:mx-6">
      <TodoColumn
        title="Weekly 🐨💎"
        :todos="tStore.weeklyTodos"
        type="weekly"
      />
    </n-grid-item>
    <n-grid-item class="mx-4 2xl:mx-6">
      <TodoColumn
        title="Monthly 🐻🍭"
        :todos="tStore.monthlyTodos"
        type="monthly"
      />
    </n-grid-item>
  </n-grid>
  <AbsoluteAd></AbsoluteAd>
</template>

<script setup>
import { useTodosStore } from "@/stores/todos";

import TodoColumn from "@/components/TodoColumn.vue";
import AbsoluteAd from "@/components/AbsoluteAd.vue";

const tStore = useTodosStore();
</script>

<style lang="scss">
.n-card__content {
  padding: 10px !important;
}

.n-collapse-item__header-main {
  font-size: 16px !important;
}

.n-card-header {
  padding-bottom: 0 !important;
}
</style>