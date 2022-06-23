<template>
    <div @dragleave="dragLeaveColumn" @dragover.prevent="dragOverColumn" @drop="dropColumn($event, force)"
        @dragenter.prevent>
        <n-card v-if="store.theme === 'background'" class="my-4 bg-[#f5f5f5]">
            <n-divider style="margin: 0;" title-placement="center">
                <span class="text-lg">{{ title }}</span>
            </n-divider>
        </n-card>
        <n-divider v-else title-placement="center">
            <span class="text-lg">{{ title }}</span>
        </n-divider>
        <n-collapse>
            <n-grid cols="1 s:1 m:1 l:1 xl:1 2xl:5" responsive="screen" x-gap="12">
                <n-grid-item class="mb-2" v-for="t in todos" :key="t.id">
                    <Todo :todo="t" @updateTodo="updateTodo" draggable="true" @dragstart="dragTodo($event, t.id)"
                        @dragend="xDrag" />
                </n-grid-item>
                <n-grid-item>
                    <n-card v-if="HelperStore.dragOver === force" class="h-[47.6px] bg-gray-200 opacity-50" />
                </n-grid-item>
            </n-grid>
            <div class="flex justify-center">
                <span class="text-5xl cursor-pointer"
                    :style="store.theme === 'background' ? 'color : #f5f5f5' : 'color: #18a058'"
                    @click="createTodo(force, type)">+</span>
            </div>
        </n-collapse>
    </div>
    <CreateTodo v-model:show="showCreateModal" :modal="true"></CreateTodo>
    <UpdateTodo v-model:show="showUpdateModal" :modal="true"></UpdateTodo>
</template>


<script setup>
import { defineProps, ref } from 'vue';
import { useRouter } from 'vue-router'
import { useStore } from "@/stores";
import { useHelperStore } from "@/stores/helper";

import Todo from '@/components/Todo.vue'
import CreateTodo from '@/components/CreateTodo.vue';
import UpdateTodo from '@/components/UpdateTodo';

const props = defineProps({
    todos: Object,
    title: String,
    force: String,
    type: String
})

const store = useStore()
const router = useRouter()
const HelperStore = useHelperStore()

const showCreateModal = ref(false)
const showUpdateModal = ref(false)

const createTodo = (force, type) => {
    router.push({ query: { force, type } })
    showCreateModal.value = true
}

const updateTodo = (id) => {
    router.push({ query: { id } })
    showUpdateModal.value = true
}

const dragTodo = (event, id) => {
    event.dataTransfer.dropEffect = 'move'
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('todo-id', id)
    const index = store.todos.findIndex((v) => v.id === id)
    store.todos[index].draging = true
}

const dropColumn = (event, force) => {
    const id = event.dataTransfer.getData('todo-id')
    const index = store.todos.findIndex((v) => v.id === id)
    store.todos[index].force = force
    const tempTodo = store.todos[index]
    store.todos.splice(index, 1)
    store.todos.push(tempTodo)
    HelperStore.dragOver = ''
}

const dragOverColumn = () => {
    HelperStore.dragOver = props.force
}

const xDrag = () => {
    HelperStore.dragOver = ''
}

// const dragOverTodo = (event, id) => {
//     store.todos.map((v) => {
//         if (v.id === id) v.dragOver = true
//         else v.dragOver = false
//     })
// }

// const dropTodo = (event, destinationId, force) => {
//     console.log('drop-todo');

//     const sourceId = event.dataTransfer.getData('todo-id')
//     const sourceIndex = store.todos.findIndex((v) => v.id === sourceId)
//     const destinationIndex = store.todos.findIndex((v) => v.id === destinationId)

//     store.todos[destinationIndex].dragOver = false
//     store.todos[sourceIndex].force = force

//     const tempTodo = store.todos[sourceIndex]

//     store.todos.splice(sourceIndex, 1)

//     store.todos.splice(destinationIndex, 0, tempTodo)

// }

</script>