<template>
  <n-layout content-style="height: 100vh" has-sider>
    <n-layout-sider class="my-4 shadow-sm rounded-b-2xl rounded-r-2xl" position="static"
      :width="openSidebar ? '250px' : '0px'">
      <Sidebar />
    </n-layout-sider>

    <n-layout>
      <n-layout-header class="bg-inherit">
        <Header v-model:sidebar="openSidebar" />
      </n-layout-header>

      <n-layout-content>
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";

const openSidebar = ref(true)
</script>