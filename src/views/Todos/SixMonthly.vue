<template>
    <!-- <n-grid cols="1 s:1 m:2 l:3 xl:2 2xl:5" responsive="screen" x-gap="12">
        <n-grid-item class="mx-4 2xl:mx-6"> -->
    <div class="flex justify-center">
        <div class="2xl:w-5/12 xl:w-5/12 lg:w-7/12 md:w-11/12 sm:w-11/12 w-11/12">
            <TodoColumn title="Six Monthly 🐭🌿" :todos="tStore.sixMonthlyTodos" type="six-monthly" force="medium" />
        </div>
    </div>
    <!-- </n-grid-item>
    </n-grid> -->
    <AbsoluteAd></AbsoluteAd>
</template>

<script setup>
import { useTodosStore } from "@/stores/todos";

import TodoColumn from '@/components/TodoColumn.vue';
import AbsoluteAd from '@/components/AbsoluteAd.vue';

const tStore = useTodosStore();

</script>

<style lang="scss">
.n-card__content {
    padding: 10px !important
}

.n-collapse-item__header-main {
    font-size: 16px !important;
}

.n-card-header {
    padding-bottom: 0 !important;
}
</style>