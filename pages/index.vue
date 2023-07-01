<template>
  <main class="xl:mx-20">
    <nav class="flex justify-end pt-5 px-4">
      <div>
        <Archives />
      </div>
    </nav>
    <div
      class="flex w-12/12 flex-col xl:flex-row items-center xl:items-start mt-5"
    >
      <section class="w-full md:w-10/12 lg:w-8/12 xl:w-4/12 px-4">
        <div
          class="flex items-center py-3 px-2 bg-primary mb-3 rounded-xl shadow-sm"
        >
          <div class="h-[1px] border w-full bg-[#ccc]"></div>
          <div class="w-full text-center text-lg text-primary">Low 🐼🍋</div>
          <div class="h-[1px] border w-full bg-[#ccc]"></div>
        </div>
        <div>
          <template v-for="todo in lowTodos" :key="todo.id">
            <Todo :todo="todo" :isArchive="false" />
          </template>
        </div>
        <NewTodo level="low" />
      </section>
      <section class="w-full md:w-10/12 lg:w-8/12 xl:w-4/12 px-4">
        <div
          class="flex items-center py-3 px-2 bg-primary mb-3 rounded-xl shadow-sm"
        >
          <div class="h-[1px] border w-full bg-[#ccc]"></div>
          <div class="w-full text-center text-lg text-primary">Medium 🐨💎</div>
          <div class="h-[1px] border w-full bg-[#ccc]"></div>
        </div>
        <div>
          <template v-for="todo in mediumTodos" :key="todo.id">
            <Todo :todo="todo" :isArchive="false" />
          </template>
        </div>
        <NewTodo level="medium" />
      </section>
      <section class="w-full md:w-10/12 lg:w-8/12 xl:w-4/12 px-4">
        <div
          class="flex items-center py-3 px-2 bg-primary mb-3 rounded-xl shadow-sm"
        >
          <div class="h-[1px] border w-full bg-[#ccc]"></div>
          <div class="w-full text-center text-lg text-primary">High 🐻🍭</div>
          <div class="h-[1px] border w-full bg-[#ccc]"></div>
        </div>
        <div>
          <template v-for="todo in highTodos" :key="todo.id">
            <Todo :todo="todo" :isArchive="false" />
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

const todosStore = useTodosStore()
const { lowTodos, mediumTodos, highTodos } = storeToRefs(todosStore)

useHead({ title: "Todolist | تودولیست" })
</script>
