<script lang="ts" setup>
const task = ref('')
</script>

<template>
  <UInput
    v-model="task"
    size="xl"
    inputClass="py-4 shadow-none ring-0"
    class="border-red-400"
    placeholder="Write..."
  >
    <template v-if="task.length" #trailing>
      <span class="font-bold">Push</span>
      <!-- <UButton icon="i-heroicons-plus" size="xl" color="black" square /> -->
    </template>
  </UInput>
</template>
