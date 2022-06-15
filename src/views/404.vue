<template>
    <n-result class="mt-10" status="404" title="404 Not Found" description="You know life is always ridiculous.">
        <template #footer>
            <n-button type="primary" @click="router.push({ name: 'home' })">Return To Home</n-button>
        </template>
    </n-result>
</template>

<script setup>
import { useRouter } from "vue-router"
const router = useRouter()


</script>