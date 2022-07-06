<template>
  <n-card class="shadow-md">
    <n-collapse-item :title="todo.title" :name="todo.id">
      <template #header-extra>
        <i
          v-if="todo.pin"
          class="w-[10px] h-[10px] rounded-full bg-[#ff0000] mx-3"
        ></i>
        <n-checkbox
          style="color: red"
          :checked="todo.done"
          size="large"
          @click.stop="changeDone(todo.id, !todo.done)"
        ></n-checkbox>

        <n-popover style="padding: 0" trigger="click" placement="left-start">
          <template #trigger>
            <img
              class="ml-3"
              ref="menu"
              src="@/assets/more-svgrepo-com.svg"
              width="15"
              @click.stop
            />
          </template>
          <p
            class="text-center px-14 py-2 cursor-pointer"
            @click="changePin(todo.id, !todo.pin)"
          >
            {{ todo.pin ? "Unpin 📌" : "Pin 📌" }}
          </p>
          <hr />
          <p
            class="text-center px-14 py-2 cursor-pointer"
            @click="updateTodo(todo.id)"
          >
            Edit 🖍
          </p>
          <hr />
          <p
            class="text-center px-14 py-2 cursor-pointer"
            @click="tStore.deleteTodo({ id: todo.id })"
          >
            Delete 🗑
          </p>
        </n-popover>
      </template>
      <p>{{ todo.desc }}</p>
      <div class="flex justify-center mt-3">
        <n-button type="primary" disabled>Pomodoro</n-button>
      </div>
    </n-collapse-item>
  </n-card>
</template>

<script setup>
import { defineProps, defineEmits, toRefs, ref } from "vue";
import { useTodosStore } from "@/stores/todos";

const tStore = useTodosStore();

const props = defineProps({
  todo: Object,
});

const emit = defineEmits(["updateTodo"]);

const { todo } = toRefs(props);

const menu = ref(null);

const changeDone = (id, done) => {
  tStore.doneOrUndoneTodo({ id, done });
};

const changePin = (id, pin) => {
  menu.value.click();
  tStore.pinOrUnpinTodo({ id, pin });
};

const updateTodo = (id) => {
  menu.value.click();
  emit("updateTodo", id);
};
</script>