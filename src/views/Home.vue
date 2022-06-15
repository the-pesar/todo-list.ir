<template>
  <n-divider title-placement="center">Todo List 🎯</n-divider>
  <!-- <p>{{ $t("message") }}</p> -->
  <n-select v-model:value="store.sortBy" class="shadow rounded-2xl mb-2 w-[150px] ml-3.5" placeholder="Ordering..."
    size="large" :options="options" @update:value="changeSort" />
  <Todos></Todos>
</template>

<script setup>
import Todos from "@/components/Todos.vue";
import { useStore } from "@/stores";
const store = useStore();

store.todos || store.getTodos();

const options = [
  {
    label: '---',
    value: null
  },
  {
    label: 'Order By Time',
    value: 'time'
  },
  {
    label: 'Order ‌By Done',
    value: 'done'
  },
  {
    label: "Order By Force",
    value: 'force',
  },
]

const changeSort = (value) => {
  if (value !== null) localStorage.setItem("sortBy", value)
  else localStorage.removeItem("sortBy")
  store.sortBy = value

}

</script>
