<template>
  <main>
    <nav class="flex justify-end pt-5 px-4 xl:mx-20">
      <div>
        <button
          class="btn btn-disabled capitalize rounded-xl bg-primary text-primary shadow-sm text-lg font-medium hover:bg-primary"
        >
          Archives
          <ArchiveIcon />
        </button>
      </div>
    </nav>
    <div
      class="flex w-12/12 flex-col xl:flex-row items-center xl:items-start xl:mx-20 mt-5"
    >
      <section class="w-12/12 md:w-10/12 lg:w-8/12 xl:w-4/12 px-4">
        <div
          class="flex items-center py-3 px-2 bg-primary mb-3 rounded-xl shadow-sm"
        >
          <div class="h-[1px] border w-full bg-[#ccc]"></div>
          <div class="w-full text-center text-lg text-primary">Low 🐼🍋</div>
          <div class="h-[1px] border w-full bg-[#ccc]"></div>
        </div>
        <div>
          <template v-for="todo in lowTodos" :key="todo.id">
            <Todo :todo="todo" />
          </template>
        </div>
        <NewTodo level="low" />
      </section>
      <section class="w-12/12 md:w-10/12 lg:w-8/12 xl:w-4/12 px-4">
        <div
          class="flex items-center py-3 px-2 bg-primary mb-3 rounded-xl shadow-sm"
        >
          <div class="h-[1px] border w-full bg-[#ccc]"></div>
          <div class="w-full text-center text-lg text-primary">Medium 🐨💎</div>
          <div class="h-[1px] border w-full bg-[#ccc]"></div>
        </div>
        <div>
          <template v-for="todo in mediumTodos" :key="todo.id">
            <Todo :todo="todo" />
          </template>
        </div>
        <NewTodo level="medium" />
      </section>
      <section class="w-12/12 md:w-10/12 lg:w-8/12 xl:w-4/12 px-4">
        <div
          class="flex items-center py-3 px-2 bg-primary mb-3 rounded-xl shadow-sm"
        >
          <div class="h-[1px] border w-full bg-[#ccc]"></div>
          <div class="w-full text-center text-lg text-primary">High 🐻🍭</div>
          <div class="h-[1px] border w-full bg-[#ccc]"></div>
        </div>
        <div>
          <template v-for="todo in highTodos" :key="todo.id">
            <Todo :todo="todo" />
          </template>
        </div>
        <NewTodo level="high" />
      </section>
    </div>
    <ThemeSelector />
  </main>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia"
import ArchiveIcon from "@/components/icons/Archive.vue"

const todosStore = useTodosStore()
const { lowTodos, mediumTodos, highTodos } = storeToRefs(todosStore)
</script>
