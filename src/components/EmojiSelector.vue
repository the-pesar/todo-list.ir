<template>
    <n-popover style="padding: 4px" trigger="click" placement="bottom-end">
        <template #trigger>
            <img class="cursor-pointer" src="@/assets/iconmonstr-smiley-2.svg" alt="">
        </template>
        <div class="text-lg max-w-[230px] max-h-[200px] overflow-y-scroll">
            <span class="px-1.5 cursor-pointer" v-for="e in emojis" :key="e" @click="addEmoji(e)">
                {{ e }}
            </span>
        </div>
    </n-popover>
</template>

<script setup>
import emojis from '@/assets/emojis.json'
import { defineEmits, defineProps } from 'vue'

const props = defineProps({
    emoji: String
})

const emit = defineEmits(["update:emoji"])

const addEmoji = (e) => emit("update:emoji", props.emoji + ' ' + e)
</script>