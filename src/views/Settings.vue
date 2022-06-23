<template>
    <n-card class="mx-auto mt-10 w-[360px] px-2 text-center shadow-md font-semibold"
        :class="{ 'bg-[#f5f5f5]': store.theme === 'background' }">
        <span class="text-lg">page is not complete yet 🗿🗿🗿</span>
    </n-card>
</template>

<script setup>
import { useStore } from "@/stores";

const store = useStore()
</script>