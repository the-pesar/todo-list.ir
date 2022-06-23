<template>
    <n-modal v-if="modal" v-model:show="showModal">
        <n-card style="width: 500px; background-color: #f5f5f5" title="Create Todo" :bordered="true" size="huge"
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
                <n-button class="mt-4" type="primary" :block="true" @click="createTodo">Create</n-button>
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
import { defineEmits, defineProps, computed, ref } from 'vue'
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

const emit = defineEmits(["update:show"])

const showModal = computed({
    get: () => props.show,
    set: (nVal) => emit("update:show", nVal)
})


const createTodo = () => {
    store.createTodo({
        title: title.value,
        desc: desc.value,
        force: route.query.force,
        type: route.query.type,
        pin: false
    })

    showModal.value = false
    router.push({ query: {} })
    title.value = ''
    desc.value = ''
}

</script>