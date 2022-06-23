<template>
    <n-layout has-sider>
        <n-layout-sider class="shadow-xl hidden md:block" :class="{ 'bg-[#f5f5f5]': store.theme === 'background' }"
            position="static" width="250px">
            <Sidebar></Sidebar>
            <n-layout-footer class="flex items-center justify-center"
                :class="store.theme === 'background' ? 'bg-[#f5f5f5]' : 'bg-white'" position="absolute"
                style="padding: 24px;">
                <span class="font-semibold">Good theme</span>
                <n-switch v-model:value="store.theme" checked-value="background" unchecked-value="no-background"
                    class="mx-3" size="medium" @update:value="changeTheme">
                </n-switch>
            </n-layout-footer>
        </n-layout-sider>
        <n-layout>
            <n-layout-content :class="store.theme === 'background' ? 'background-theme' : 'no-background-theme'"
                content-style="height: 100vh;">
                <router-view></router-view>
            </n-layout-content>
        </n-layout>
    </n-layout>
</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue"
import { useStore } from "@/stores";

const store = useStore()

const changeTheme = (theme) => {
    localStorage.setItem('theme', theme)
}
</script>

<style lang="scss" scoped>
.no-background-theme {
    background-color: #f5f5f5;
}

.background-theme {
    background-image: url("@/assets/Wallpapers/Nature/Desktop-14.jpg") !important;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
</style>