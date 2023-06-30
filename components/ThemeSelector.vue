<template>
  <div class="flex flex-col fixed bottom-5 right-4 z-50">
    <ul v-if="open" class="menu px-0 bg-primary rounded-box shadow-md mb-5">
      <li
        class="bg-gray-200 rounded-full w-[30px] h-[30px] cursor-pointer"
        @click="setTheme('light')"
      ></li>
      <li
        class="bg-green-400 rounded-full w-[30px] h-[30px] cursor-pointer"
        @click="setTheme('jungle')"
      ></li>
      <li
        class="bg-black rounded-full w-[30px] h-[30px] cursor-pointer"
        @click="setTheme('dark')"
      ></li>
    </ul>
    <button
      class="btn w-[62px] h-[62px] rounded-full bg-primary shadow-md text-lg font-medium hover:bg-primary"
      @click="open = !open"
    >
      <LayersIcon />
    </button>
  </div>
</template>

<script lang="ts" setup>
import LayersIcon from "@/components/icons/Layers.vue"

const open = ref<boolean>(false)
const { setTheme } = useThemesStore()
</script>
