<template>
    <p class="plus-icon text-5xl cursor-pointer text-center" @click="$emit('click')">
        +
    </p>
</template>

<script setup>
import { defineEmits } from 'vue'

defineEmits(['click'])
</script>