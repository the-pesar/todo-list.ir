<template>
  <n-notification-provider :placement="'bottom'">
    <n-loading-bar-provider>
      <router-view />
    </n-loading-bar-provider>
  </n-notification-provider>
</template>

<script setup>
</script>