<template>
    <n-grid cols="1 s:1 m:2 l:3 xl:3 2xl:5" responsive="screen" x-gap="12">
        <n-grid-item class="mx-10">
            <n-divider title-placement="center">
                <span class="text-xl">Low 🐼🍋</span>
            </n-divider>
            <n-collapse>
                <n-grid cols="1 s:1 m:2 l:3 xl:1 2xl:5" responsive="screen" x-gap="12">
                    <n-grid-item v-for="t in todos" :key="t.id">
                        <Todo :todo="t"></Todo>
                    </n-grid-item>
                    <n-grid-item class="flex justify-center">
                        <span class="text-5xl cursor-pointer" style="color: #18a058" @click="showModal = true">+</span>
                    </n-grid-item>
                </n-grid>
            </n-collapse>
        </n-grid-item>

        <n-grid-item class="mx-10">
            <n-divider title-placement="center">
                <span class="text-xl">Medium 🐨💎</span>
            </n-divider>
            <n-collapse>
                <n-grid cols="1 s:1 m:2 l:3 xl:1 2xl:5" responsive="screen" x-gap="12">
                    <n-grid-item v-for="t in todos" :key="t.id">
                        <Todo :todo="t"></Todo>
                    </n-grid-item>
                    <n-grid-item class="flex justify-center">
                        <span class="text-5xl cursor-pointer" style="color: #18a058" @click="showModal = true">+</span>
                    </n-grid-item>
                </n-grid>
            </n-collapse>
        </n-grid-item>

        <n-grid-item class="mx-10">
            <n-divider title-placement="center">
                <span class="text-xl">High 🐻🍭</span>
            </n-divider>
            <n-collapse>
                <n-grid cols="1 s:1 m:2 l:3 xl:1 2xl:5" responsive="screen" x-gap="12">
                    <n-grid-item v-for="t in todos" :key="t.id">
                        <Todo :todo="t"></Todo>
                    </n-grid-item>
                    <n-grid-item class="flex justify-center">
                        <span class="text-5xl cursor-pointer" style="color: #18a058" @click="showModal = true">+</span>
                    </n-grid-item>
                </n-grid>
            </n-collapse>
        </n-grid-item>
    </n-grid>

    <n-modal v-model:show="showModal">
        <n-card style="width: 500px" title="Create Todo" :bordered="true" size="huge" role="dialog">
            <div class="px-8 pb-5">
                <n-input placeholder="title..." size="large" />
                <n-input class="mt-4" type="textarea" placeholder="description..." size="large" />
                <n-button class="mt-4" type="primary" :block="true">Create</n-button>
            </div>
        </n-card>
    </n-modal>
</template>

<script setup>
import { ref } from 'vue'
import Todo from '@/components/Todo.vue'

const showModal = ref(false)

const todos = [
    {
        id: 0,
        title: "Fix Sorting bugs todo list",
        desc: "Fix SortingFix SortingFix SortingFix SortingFix Sorting",
        done: false,
        pin: false
    },
    {
        id: 1,
        title: "Add New Feature TodoList 🧠",
        desc: "desc desc desc desc desc desc desc desc",
        done: false,
        pin: false
    },
    {
        id: 2,
        title: "Find a new Post for Dev.tweet 🌎",
        desc: "desc",
        done: false,
        pin: false
    },
    {
        id: 3,
        title: "create new episode poadcast",
        desc: "new episode poadcast new episode poadcast new episode poadcast new episode poadcast new episode poadcast new episode poadcast new episode poadcast new episode poadcast new episode poadcast new episode poadcast new episode poadcast new episode poadcast new episode poadcast new episode poadcast new episode poadcast ",
        done: false,
        pin: false
    },
    {
        id: 4,
        title: "just for test",
        desc: "just for test just for test just for test just for test just for test just for test just for test just for test just for test just for test ",
        done: false,
        pin: false
    }
]
// import { useStore } from "@/stores";

// const store = useStore();

// store.todos || store.getTodos();

// const options = [
//     {
//         label: '---',
//         value: null
//     },
//     {
//         label: 'Order By Time',
//         value: 'time'
//     },
//     {
//         label: 'Order ‌By Done',
//         value: 'done'
//     },
//     {
//         label: "Order By Force",
//         value: 'force',
//     },
// ]

// const changeSort = (value) => {
//     if (value !== null) localStorage.setItem("sortBy", value)
//     else localStorage.removeItem("sortBy")
//     store.sortBy = value

// }

</script>

<style lang="scss">
.n-card__content {
    padding: 10px !important
}

.n-collapse-item__header-main {
    font-size: 16px !important;
}

.n-card-header {
    padding-bottom: 0 !important;
}
</style>