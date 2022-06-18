<template>
    <n-card class="mb-2 shadow-md">
        <n-collapse-item :title="todo.title" :name="todo.id">
            <template #header-extra>
                <n-checkbox :checked="todo.done" size="large" @click.stop></n-checkbox>

                <n-popover style="padding: 0" trigger="click" placement="left-start">
                    <template #trigger>
                        <img class="ml-3" src="@/assets/more-svgrepo-com.svg" width="15" @click.stop>
                    </template>

                    <p class="text-center px-14 py-2" @click="changePin(todo.id, !todo.pin)">
                        {{ todo.pin ? "Unpin 📌" : "Pin 📌" }}
                    </p>
                    <hr>
                    <p class="text-center px-14 py-2" @click="updateTodo(todo.id)">Edit 🖍</p>
                    <hr>
                    <p class="text-center px-14 py-2" @click="deleteTodo(todo.id)">Delete 🗑</p>

                </n-popover>
            </template>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptas soluta
                dignissimos
                tempora at
                reprehenderit adipisci culpa voluptate pariatur quisquam, dolore assumenda hic odio
                quaerat quasi, id
                optio
                facere provident.</p>
        </n-collapse-item>
    </n-card>
</template>

<script setup>
import { defineProps, toRefs, ref } from "vue";
import { useStore } from "@/stores";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter()

const props = defineProps({
    todo: Object
})

const { todo } = toRefs(props)

const menu = ref(null)
// const changeDone = (id, done) => {
//     store.doneOrUndoneTodo({ id, done });
// };

const deleteTodo = (id) => {
    store.deleteTodo({ id });
};

const changePin = (id, pin) => {
    menu.value.click()
    store.pinOrUnpinTodo({ id, pin })
}

const updateTodo = (id) => {
    router.push({ name: 'updateTodo', params: { id } })
}
</script>

<style>
.n-card-header__main {
    /* text-decoration: line-through; */
}
</style>