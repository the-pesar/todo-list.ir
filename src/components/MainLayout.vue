<template>
    <n-layout has-sider>
        <n-layout-sider v-if="true" class="shadow-xl" position="static" width="250px">
            <Sidebar></Sidebar>
        </n-layout-sider>
        <n-layout content-style="background-color: red">
            <n-layout-content content-style="background-color: #f5f5f5; height: 100vh">
                <router-view></router-view>
            </n-layout-content>
        </n-layout>
    </n-layout>
</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue"
</script>