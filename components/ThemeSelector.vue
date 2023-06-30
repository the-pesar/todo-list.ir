<template>
  <div class="flex flex-col absolute bottom-5 right-5 mx-5">
    <ul v-if="open" class="menu px-0 bg-primary rounded-box shadow-md mb-5">
      <li
        class="rounded-full w-[30px] h-[30px] cursor-pointer"
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
    <div class="tooltip tooltip-left" data-tip="Themes">
      <button
        class="btn w-[62px] h-[62px] rounded-full bg-primary shadow-md text-lg font-medium hover:bg-primary"
        @click="open = !open"
      >
        <img src="@/assets/icons/layers.svg" width="50" alt="" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const open = ref<boolean>(false)
const { setTheme } = useThemesStore()
</script>
