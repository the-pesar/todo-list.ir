<template>
  <svg
    v-if="theme === 'dark'"
    width="24"
    height="24"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M112 184L256 328L400 184"
      stroke="white"
      stroke-width="48"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-else
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 9L12 15L18 9"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia"

const themesStore = useThemesStore()
const { theme } = storeToRefs(themesStore)
</script>
