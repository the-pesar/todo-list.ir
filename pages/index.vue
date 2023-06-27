<template>
  <main
    class="flex w-12/12 flex-col xl:flex-row items-center xl:items-start xl:mx-20"
  >
    <section class="w-12/12 md:w-10/12 lg:w-8/12 xl:w-4/12 px-4">
      <div class="flex items-center py-5">
        <div class="h-[1px] border w-full bg-[#ccc]"></div>
        <div class="w-full text-center text-lg">Low 🐼🍋</div>
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
      <div class="flex items-center py-5">
        <div class="h-[1px] border w-full bg-[#ccc]"></div>
        <div class="w-full text-center text-lg">Medium 🐨💎</div>
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
      <div class="flex items-center py-5">
        <div class="h-[1px] border w-full bg-[#ccc]"></div>
        <div class="w-full text-center text-lg">High 🐻🍭</div>
        <div class="h-[1px] border w-full bg-[#ccc]"></div>
      </div>
      <div>
        <template v-for="todo in highTodos" :key="todo.id">
          <Todo :todo="todo" />
        </template>
      </div>
      <NewTodo level="high" />
    </section>
  </main>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia"

useHead({ htmlAttrs: { "data-mode": "light" } })
const todosStore = useTodosStore()
const { lowTodos, mediumTodos, highTodos } = storeToRefs(todosStore)
</script>
