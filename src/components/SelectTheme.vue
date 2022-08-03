<template>
    <n-card class="shadow-sm rounded-lg" size="small">
        <div class="flex">
            <p class="text-lg font-semibold mr-auto">Themes</p>
            <div class="rounded-full p-4 cursor-pointer bg-[#000]" @click="setTheme('dark')"></div>
            <div class="rounded-full mx-5 p-4 cursor-pointer bg-[#ccc]" @click="setTheme('light')"></div>
            <div class="rounded-full p-4 cursor-pointer bg-green-700" @click="setTheme('background')"></div>
        </div>
    </n-card>
</template>


<script setup>
import useTheme from "@/composables/theme"

const { setTheme } = useTheme();
</script>