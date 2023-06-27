<template>
  <div
    tabindex="0"
    class="collapse bg-white shadow-sm rounded-xl cursor-pointer mb-3"
    :class="open ? 'collapse-open' : 'collapse-close'"
    @click.stop="open = !open"
  >
    <div class="collapse-title text-lg font-medium px-2">
      <div class="flex justify-between">
        <div class="flex w-full">
          <img v-show="open" src="@/assets/icons/chevron-down.svg" alt="" />
          <img v-show="!open" src="@/assets/icons/chevron-right.svg" alt="" />
          <p v-text="todo.title"></p>
        </div>
        <div class="flex items-center">
          <input
            class="checkbox checkbox-sm mx-2"
            type="checkbox"
            :checked="todo.done"
            @click.stop="doneToggleTodo({ id: todo.id, done: !todo.done })"
          />
          <img src="@/assets/icons/more-vertical.svg" width="27" alt="" />
        </div>
      </div>
    </div>
    <div class="collapse-content">
      <p v-text="todo.description"></p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  todo: ITodo
}>()

const { doneToggleTodo } = useTodosStore()

const open = ref<boolean>(false)
</script>
