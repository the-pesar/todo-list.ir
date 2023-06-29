<template>
  <div
    tabindex="0"
    class="collapse bg-white shadow-sm rounded-xl cursor-pointer mb-3 z-10"
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
          <div class="dropdown dropdown-left z-[10000]">
            <label>
              <img
                tabindex="1"
                class="cursor-pointer"
                src="@/assets/icons/more-vertical.svg"
                width="27"
                alt=""
                @click.stop
              />
            </label>
            <div
              tabindex="1"
              class="dropdown-content bg-[#f5f5f5] -mt-[7px] shadow-sm rounded-xl px-2 py-1 w-[181px] text-base z-50"
              @click.stop
            >
              <button>Edit</button>
              <span> / </span>
              <button @click="archiveTodo({ id: todo.id })">Archive</button>
              <span> / </span>
              <button @click="deleteTodo({ id: todo.id })">Delete</button>
            </div>
          </div>
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

const { doneToggleTodo, deleteTodo, archiveTodo } = useTodosStore()

const open = ref<boolean>(false)
const optionsOpen = ref<boolean>(false)
</script>
