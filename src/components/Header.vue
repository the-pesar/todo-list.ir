<template>
    <n-card class="sticky top-4 mt-4 z-50 mx-auto shadow-sm rounded-xl w-[98%]" size="small">
        <div class="flex justify-between">
            <i class='bx bx-menu text-3xl cursor-pointer' @click="$emit('update:sidebar', !sidebar)"></i>
            <span class="font-bold my-auto text-md" v-text="date"></span>
        </div>
    </n-card>
</template>

<script setup>
import { defineEmits, defineProps, ref } from 'vue'
import dayjs from 'dayjs'

defineProps({
    sidebar: Boolean
})
defineEmits(['update:sidebar'])

const date = ref(dayjs().format('H:mm:ss'))

setInterval(() => {
    date.value = dayjs().format('H:mm:ss')
}, 1000);
</script>