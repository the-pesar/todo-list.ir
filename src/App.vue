<template>
  <n-config-provider :theme="theme === 'dark' ? darkTheme : null">
    <n-notification-provider placement="bottom-right">
      <n-loading-bar-provider>
        <router-view />
      </n-loading-bar-provider>
    </n-notification-provider>
  </n-config-provider>
</template>

<script setup>
import { useTodosStore } from "@/stores/todos";
import { darkTheme } from "naive-ui";
import useTheme from "@/composables/theme"

const tStore = useTodosStore();
tStore.todos ?? tStore.getTodos();

const { theme } = useTheme()
</script>