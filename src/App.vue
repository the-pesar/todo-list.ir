<template>
  <n-config-provider :theme="theme.name === 'dark' ? darkTheme : null">
    <n-notification-provider placement="bottom-right">
      <n-loading-bar-provider>
        <router-view />
      </n-loading-bar-provider>
    </n-notification-provider>
  </n-config-provider>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useTodosStore } from "@/stores/todos";
import { useStore } from "@/stores/index";
import { darkTheme } from "naive-ui";

const tStore = useTodosStore();
tStore.todos ?? tStore.getTodos();

const Store = useStore();

const { theme } = storeToRefs(Store);
</script>

<style lang="scss">
.n-card,
.n-layout-sider,
.n-layout-footer {
  background-color: v-bind("theme.cardColor");
}

.n-layout-content {
  background-color: v-bind("theme.bgBody");
}

.n-divider {
  background-color: v-bind("theme.bgDivider");
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 3px;
  padding: 11px 10px;
}

.plus-todo {
  color: v-bind("theme.plusColor");
}
</style>