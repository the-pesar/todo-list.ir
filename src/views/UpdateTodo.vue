<template>
    <n-divider title-placement="center">Update Todo 🎯</n-divider>
    <div class="px-2.5">
        <n-input v-model:value="name" type="text" placeholder="todo name..." size="large">
            <template #suffix>
                <EmojiSelector @select="name += $event"></EmojiSelector>
            </template>
        </n-input>
        <n-input class="my-3" v-model:value="desc" type="textarea" placeholder="todo description..." size="large">
            <template #suffix>
                <EmojiSelector @select="desc += $event"></EmojiSelector>
            </template>
        </n-input>

        <div class="flex justify-center mb-4">
            <n-rate v-model:value="force" size="large" color="#4fb233" />
        </div>

        <n-button type="primary" :block="true" size="large" @click="createTodo" :loading="store.loading">
            Update Todo
        </n-button>
        <p class="opacity-60 font-medium mt-2" @click="router.push({ name: 'home' })">
            Back to Todos Page...
        </p>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "@/stores/";
import { useRouter } from "vue-router";
import EmojiSelector from '@/components/EmojiSelector.vue'
import { useLoadingBar, useNotification } from "naive-ui";

const router = useRouter();
const store = useStore();
const loadingBar = useLoadingBar();
const notification = useNotification();

const name = ref("");
const desc = ref("");
const force = ref(1)

const createTodo = async () => {
    if (name.value === "") {
        notification.create({
            title: "name field is required",
            duration: 2000,
            closable: false,
            type: "error",
        });
        return
    }
    loadingBar.start();
    await store.createTodo({ name: name.value, desc: desc.value, force: force.value });
    loadingBar.finish();
    notification.create({
        title: "new todo created with success!",
        duration: 10,
        closable: false,
        type: "success",
        onAfterLeave: () => {
            router.push({ name: "home" });
        },
    });
};

</script>