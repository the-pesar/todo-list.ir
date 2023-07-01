<template>
  <button
    class="btn capitalize rounded-xl bg-primary text-primary shadow-sm text-lg font-medium hover:bg-primary"
    @click="isOpen = true"
  >
    Archive 📚
  </button>
  <dialog
    id="my_modal_1"
    class="modal"
    :class="isOpen && 'modal-open'"
    @click.self="isOpen = false"
  >
    <form
      method="dialog"
      class="modal-box fixed top-10 modal-bg-color xl:min-w-[600px]"
    >
      <button
        class="btn btn-sm btn-circle btn-ghost text-lg absolute right-2 top-2"
        @click="isOpen = false"
      >
        ✕
      </button>
      <h3 class="font-bold text-lg mb-4 text-center">Archived Todos 🗳️</h3>
      <template v-for="todo in archivedTodos" :key="todo.id">
        <Todo :todo="todo" :isArchive="true" />
      </template>
    </form>
  </dialog>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia"
// import ArchiveIcon from "@/components/icons/Archive.vue"

const todosStore = useTodosStore()
const { archivedTodos } = storeToRefs(todosStore)

const isOpen = ref<boolean>(false)
</script>
