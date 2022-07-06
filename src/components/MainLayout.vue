<template>
  <n-layout has-sider>
    <n-layout-sider
      class="shadow-xl hidden md:block"
      position="static"
      width="250px"
    >
      <Sidebar></Sidebar>
      <n-layout-footer
        class="flex items-center justify-center"
        position="absolute"
        style="padding: 24px"
      >
        <div
          class="rounded-full p-4 cursor-pointer bg-[#000]"
          @click="changeTheme('dark')"
        ></div>
        <div
          class="rounded-full mx-5 p-4 cursor-pointer bg-[#ccc]"
          @click="changeTheme('light')"
        ></div>
        <div
          class="rounded-full p-4 cursor-pointer bg-green-700"
          @click="changeTheme('background')"
        ></div>
      </n-layout-footer>
    </n-layout-sider>
    <n-layout>
      <n-layout-content
        :class="{ 'background-theme': theme.name === 'background' }"
        content-style="height: 100vh;"
      >
        <router-view></router-view>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup>
import { storeToRefs } from "pinia";
import Sidebar from "@/components/Sidebar.vue";
import { useStore } from "@/stores/index";

const Store = useStore();

const { changeTheme } = Store;
const { theme } = storeToRefs(Store);
</script>

<style lang="scss" scoped>
.background-theme {
  background-image: url("@/assets/Wallpapers/Nature/Desktop-14.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>