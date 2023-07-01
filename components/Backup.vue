<template>
  <div class="dropdown dropdown-bottom dropdown-end" ref="dropdown">
    <label tabindex="0">
      <button
        class="btn capitalize rounded-xl bg-primary text-primary shadow-sm text-lg font-medium hover:bg-primary mx-2"
      >
        Backup 📥
      </button>
    </label>
    <div
      tabindex="0"
      class="dropdown-content z-[50] mt-2 py-4 px-5 shadow-md bg-base-100 rounded-box w-[300px]"
    >
      <h3 class="text-center mb-4 font-bold">Export & Import Data</h3>
      <div class="flex justify-between">
        <div class="tooltip tooltip-bottom w-[47%]" data-tip="backup.json">
          <button class="btn w-full" @click="exportData">Export ⚡</button>
        </div>
        <button class="btn w-[47%]" @click="importData">Import 🔥</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia"

const todosStore = useTodosStore()
const { todos } = storeToRefs(todosStore)

const dropdown = ref<HTMLDivElement>()
const open = ref<boolean>(false)

function exportData() {
  const blob = new Blob([JSON.stringify(todos.value, null, 2)], {
    type: "application/json",
  })
  const url = URL.createObjectURL(blob)
  const element = document.createElement("a")
  element.href = url
  element.download = "backup.json"
  element.classList.add("hidden")
  dropdown.value!.appendChild(element).click()
  dropdown.value!.removeChild(element)
}

function importData() {
  const element = document.createElement("input")
  element.type = "file"
  element.classList.add("hidden")
  dropdown.value!.appendChild(element).click()
  element.addEventListener("change", (e: any) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsText(file)
    reader.onload = () => {
      todos.value = JSON.parse(reader.result as string) as ITodo[]
      todosStore.saveTodos()
    }
    dropdown.value!.removeChild(element)
  })
}
</script>
