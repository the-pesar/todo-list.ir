<template>
  <div v-if="active">
    <input
      v-if="step === 'title'"
      v-model="title"
      class="input input-bordered input-md py-7 text-lg shadow-sm rounded-xl focus:outline-none w-full bg-primary"
      ref="input"
      type="text"
      placeholder="Write a title..."
      @blur="step === 'title' && switchToUnactive()"
      @keypress.enter="switchToNextStep"
    />
    <textarea
      v-else-if="step === 'description'"
      v-model="description"
      class="textarea textarea-bordered h-[120px] resize-none text-lg shadow-sm rounded-xl focus:outline-none w-full bg-primary"
      ref="textarea"
      placeholder="Write a description for todo... (optional)"
      @blur="switchToUnactive"
      @keypress.enter="create"
    ></textarea>
  </div>
  <div
    v-else
    class="text-center text-4xl cursor-pointer text-secondary"
    @click="switchToActive"
  >
    +
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  level: Level
}>()

const title = ref<string>("")
const description = ref<string>("")
const step = ref<"title" | "description">("title")
const active = ref<boolean>(false)
const input = ref<HTMLInputElement>()
const textarea = ref<HTMLTextAreaElement>()

const { createTodo } = useTodosStore()

function switchToActive() {
  active.value = true
  nextTick().then(() => input.value?.focus())
}

function switchToUnactive() {
  title.value = ""
  description.value = ""
  step.value = "title"
  active.value = false
}

function switchToNextStep() {
  if (!title.value) return
  step.value = "description"
  nextTick().then(() => textarea.value?.focus())
}

function create() {
  createTodo({
    title: title.value,
    level: props.level,
    description: description.value,
  })
  title.value = ""
  description.value = ""
  step.value = "title"
  active.value = false
}
</script>
