<template>
  <n-card class="shadow-sm rounded-xl" size="small">
    <n-collapse-item :title="todo.title" :name="todo.id">
      <template #header-extra>
        <i v-if="todo.pin" class="w-[10px] h-[10px] rounded-full bg-[#ff0000] mx-3"></i>
        <n-checkbox :checked="todo.done" size="large"
          @click.stop="tStore.doneOrUndoneTodo({ id: todo.id, done: !todo.done })" />

        <n-popover style="padding: 0" trigger="click" placement="left-start">
          <template #trigger>
            <img class="ml-3" ref="menu" src="@/assets/more-svgrepo-com.svg" width="15" @click.stop />
          </template>
          <p class="text-center px-14 py-2 cursor-pointer" @click="setPinTodo(todo.id, !todo.pin)">
            {{ todo.pin ? "Unpin 📌" : "Pin 📌" }}
          </p>
          <hr />
          <p class="text-center px-14 py-2 cursor-pointer" @click="updateTodo(todo.id)">
            Edit 🖍
          </p>
          <hr />
          <p class="text-center px-14 py-2 cursor-pointer" @click="tStore.deleteTodo({ id: todo.id })">
            Delete 🗑
          </p>
        </n-popover>
      </template>
      <p v-text="todo.desc"></p>
      <n-button class="block rounded-lg mt-3 mx-auto" type="primary" disabled>Pomodoro</n-button>
    </n-collapse-item>
  </n-card>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";
import { useTodosStore } from "@/stores/todos";

const tStore = useTodosStore();

defineProps({
  todo: Object,
});

const emit = defineEmits(["update", "setdone", "setpin", "delete"]);

const menu = ref(null);

const setPinTodo = (id, pin) => {
  menu.value.click();
  tStore.pinOrUnpinTodo({ id, pin });
};

const updateTodo = (id) => {
  menu.value.click();
  emit("updateTodo", id);
};
</script>