<template>
  <n-card class="flex shadow-md rounded-xl" size="small">
    <n-input v-model:value="todo.title" class="input" placeholder="title..." ref="input" @blur="emit('close', false)"
      @keypress.enter="createTodo">
    </n-input>
  </n-card>
</template>

<script setup>
import { defineEmits, defineProps, reactive, ref, onMounted } from "vue";

const input = ref();

const props = defineProps({
  type: String,
});

const emit = defineEmits(["close"]);

const todo = reactive({
  title: "",
  desc: "",
});

onMounted(() => input.value.focus());

const createTodo = () => {
  emit("create", {
    title: todo.title,
    desc: todo.desc,
    type: props.type
  });
  todo.title = "";
};
</script>

<style scoped>
.input {
  font-size: 16px !important;
}
</style>