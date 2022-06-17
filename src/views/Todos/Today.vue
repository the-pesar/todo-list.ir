<template>
    <!-- <n-divider title-placement="left">
        <span class="text-2xl">Today 🔥👀</span>
    </n-divider> -->
    <!-- <p>{{ $t("message") }}</p> -->
    <!-- <n-select v-model:value="store.sortBy" class="shadow rounded-2xl mb-2 w-[150px] ml-3.5" placeholder="Ordering..."
        size="large" :options="options" @update:value="changeSort" /> -->
    <Todos title="Low 🔥👀"></Todos>
    <Todos title="Medium 🔥👀"></Todos>
    <Todos title="High 🔥👀"></Todos>

    <!-- <div class="m-10">
        <Carousel :items-to-show="5">
            <Slide v-for="slide in 10" :key="slide">
                <div class="carousel__item">{{ slide }}</div>
            </Slide>

            <template #addons>
                <Navigation />
            </template>
        </Carousel>
    </div> -->

</template>

<script setup>
import Todos from "@/components/Todos.vue";
import { useStore } from "@/stores";

const store = useStore();

store.todos || store.getTodos();

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
