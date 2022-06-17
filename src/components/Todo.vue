<template>
    <n-card class="shadow-md rounded-xl" :title="todo.name || 'empty'" size="small">
        <template #header-extra>
            <n-popover style="padding: 0" trigger="click" placement="left-start">
                <template #trigger>
                    <img ref="menu" src="@/assets/more-svgrepo-com.svg" width="15" />
                </template>
                <p class="text-center px-14 py-2" @click="changePin(todo._id, !todo.pin)">
                    {{ todo.pin ? "Unpin 📌" : "Pin 📌" }}
                </p>
                <hr>
                <p class="text-center px-14 py-2" @click="updateTodo(todo._id)">Edit 🖍</p>
                <hr>
                <p class="text-center px-14 py-2" @click="deleteTodo(todo._id)">Delete 🗑</p>
            </n-popover>
        </template>
        <hr>
        <p v-if="todo.desc" class="mt-3">
            <!-- {{ todo.desc }} -->
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quod neque debitis? Repellat dicta deleniti
            est voluptatem dolorem sequi odit exercitationem consequuntur.
        </p>
        <div class="flex items-center flex-col">
            <!-- <n-rate class="my-5" readonly size="large" :default-value="todo.force" color="#18a058" /> -->
            <n-checkbox v-model:checked="todo.done" size="large" @update:checked="changeDone(todo._id, todo.done)" />
        </div>
        <!-- <div class="flex justify-end">
            <span v-if="todo.pin"
                style="background-color: #FF0000; width: 10px; height: 10px; border-radius: 50%;"></span>
        </div> -->
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

const changeDone = (id, done) => {
    store.doneOrUndoneTodo({ id, done });
};

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