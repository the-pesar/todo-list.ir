<template>
    <n-modal v-if="modal" v-model:show="showModal">
        <n-card style="width: 500px; background-color: #f5f5f5" title="Update Todo" :bordered="true" size="huge"
            role="dialog">
            <div class="px-8 pb-5">
                <n-input v-model:value="title" placeholder="title..." size="large">
                    <template #suffix>
                        <EmojiSelector v-model:emoji="title"></EmojiSelector>
                    </template>
                </n-input>
                <n-input v-model:value="desc" class="mt-4" type="textarea" placeholder="description..." size="large">
                    <template #suffix>
                        <EmojiSelector v-model:emoji="desc"></EmojiSelector>
                    </template>
                </n-input>
                <n-button class="mt-4" type="primary" :block="true" @click="updateTodo">Update</n-button>
            </div>
        </n-card>
    </n-modal>
    <n-card v-else style="width: 500px; background-color: #f5f5f5" title="Create Todo" :bordered="true" size="huge"
        role="dialog">
        <div class="px-8 pb-5">
            <n-input placeholder="title..." size="large" />
            <n-input class="mt-4" type="textarea" placeholder="description..." size="large" />
            <n-button class="mt-4" type="primary" :block="true">Create</n-button>
        </div>
    </n-card>
</template>

<script setup>
import { defineEmits, defineProps, computed, ref, watch, toRefs } from 'vue'
import { useStore } from "@/stores";
import { useRoute, useRouter } from 'vue-router';
import EmojiSelector from './EmojiSelector.vue';

const store = useStore()
const route = useRoute()
const router = useRouter()

const title = ref('')
const desc = ref('')

const props = defineProps({
    show: Boolean,
    modal: Boolean
})

const { show } = toRefs(props)

const emit = defineEmits(["update:show"])

const showModal = computed({
    get: () => show.value,
    set: (nVal) => emit("update:show", nVal)
})

watch(show, () => {
    if (show.value) {
        // because route is't sync
        setTimeout(() => {
            const todo = store.todos.find((v) => v.id === route.query.id)
            title.value = todo.title
            desc.value = todo.desc
        }, 1);
    } else {
        router.push({ query: {}, replace: true })
    }
})

const updateTodo = () => {
    store.updateTodo({
        id: route.query.id,
        title: title.value,
        desc: desc.value,
    })
    showModal.value = false
    title.value = ''
    desc.value = ''
}

</script>