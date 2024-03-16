<script lang="ts" setup>
defineProps<{
  title: string
  desc?: string
}>()
</script>

<template>
  <div class="flex p-5 rounded-lg bg-[#ffffff]">
    <div class="relative w-11/12">
      <h2 v-text="$props.title"></h2>
      <p class="absolute top-5 text-sm text-gray-400" v-text="$props.desc"></p>
    </div>
    <div class="flex justify-end w-1/12">
      <UCheckbox />
    </div>
  </div>
</template>
