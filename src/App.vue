<template>
  <n-notification-provider placement="bottom-right">
    <n-loading-bar-provider>
      <router-view />
    </n-loading-bar-provider>
  </n-notification-provider>
</template>

<script setup>
import { useStore } from '@/stores'

const store = useStore()

store.todos || store.getTodos()
</script>