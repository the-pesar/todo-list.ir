<template>
  <div
    tabindex="0"
    class="collapse bg-primary shadow-sm rounded-xl cursor-pointer mb-3 z-10"
    :class="isOpen ? 'collapse-open' : 'collapse-close'"
    @click.stop="isOpen = !isOpen"
  >
    <div class="collapse-title text-lg font-medium px-2">
      <div class="flex justify-between">
        <div class="flex w-full">
          <ChevronDownIcon v-if="isOpen" />
          <ChevronRightIcon v-else />
          <p class="text-primary" v-text="todo.title"></p>
        </div>
        <div class="flex items-center">
          <input
            class="checkbox checkbox-sm mx-2"
            :disabled="isArchive"
            type="checkbox"
            :checked="todo.done"
            @click.stop="doneToggleTodo({ id: todo.id, done: !todo.done })"
          />
          <div class="dropdown dropdown-left z-[10000]">
            <label>
              <MoreIcon
                class="cursor-pointer outline-none"
                tabindex="1"
                @click.stop
              />
            </label>
            <div
              tabindex="1"
              class="dropdown-content text-primary bg-primary -mt-[3px] shad rounded-xl px-2 py-1 w-max text-base z-50"
              @click.stop
            >
              <template v-if="isArchive">
                <button @click="restoreTodo({ id: todo.id })">Restore</button>
                <span> / </span>
                <button @click="deleteTodo({ id: todo.id })">Delete</button>
              </template>
              <template v-else>
                <button>Edit</button>
                <span> / </span>
                <button @click="archiveTodo({ id: todo.id })">Archive</button>
                <span> / </span>
                <button @click="deleteTodo({ id: todo.id })">Delete</button>
              </template>
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
  isArchive: boolean
}>()

const { doneToggleTodo, deleteTodo, archiveTodo, restoreTodo } = useTodosStore()

const isOpen = ref<boolean>(false)
</script>
