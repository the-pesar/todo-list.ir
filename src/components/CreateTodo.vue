<template>
  <n-card class="flex shadow-md">
    <n-input
      class="input"
      v-model:value="todo.title"
      placeholder="title..."
      size="medium"
      ref="todoInput"
      @blur="emit('close', false)"
      @keypress.enter="createTodo"
    >
    </n-input>
  </n-card>
</template>

<script setup>
import { defineEmits, defineProps, reactive, ref, onMounted } from "vue";
import { useTodosStore } from "@/stores/todos";

const tStore = useTodosStore();

const todoInput = ref(null);

const props = defineProps({
  force: String,
  type: String,
});

const emit = defineEmits(["close"]);

const todo = reactive({
  title: "",
  desc: "",
});

onMounted(() => todoInput.value.focus());

const createTodo = () => {
  tStore.createTodo({
    title: todo.title,
    desc: "",
    force: props.force,
    type: props.type,
    pin: false,
  });
  todo.title = "";
  emit("close", false);
};
</script>
<style lang="scss" scoped>
.input {
  font-size: 17px !important;
}
</style>