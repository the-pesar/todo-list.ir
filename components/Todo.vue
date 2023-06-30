<template>
  <div
    tabindex="0"
    class="collapse bg-primary shadow-sm rounded-xl cursor-pointer mb-3 z-10"
    :class="open ? 'collapse-open' : 'collapse-close'"
    @click.stop="open = !open"
  >
    <div class="collapse-title text-lg font-medium px-2">
      <div class="flex justify-between">
        <div class="flex w-full">
          <ChevronDownIcon v-if="open" />
          <ChevronRightIcon v-else />
          <p class="text-primary" v-text="todo.title"></p>
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
              <MoreIcon class="cursor-pointer" tabindex="1" @click.stop />
            </label>
            <div
              tabindex="1"
              class="dropdown-content text-primary bg-primary -mt-[7px] shad rounded-xl px-2 py-1 w-[181px] text-base z-50"
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
      <p class="text-primary" v-text="todo.description"></p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ChevronDownIcon from "@/components/icons/ChevronDown.vue"
import ChevronRightIcon from "@/components/icons/ChevronRight.vue"
import MoreIcon from "@/components/icons/More.vue"

const props = defineProps<{
  todo: ITodo
}>()

const { doneToggleTodo, deleteTodo, archiveTodo } = useTodosStore()

const open = ref<boolean>(false)
</script>
