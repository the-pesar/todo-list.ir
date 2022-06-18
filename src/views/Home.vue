<template>
  <!-- <div class="flex flex-col">
    <n-divider title-placement="left">
      <span class="text-2xl">{{ title }}</span>
    </n-divider>
    <n-grid cols="1 s:1 m:2 l:3 xl:5 2xl:5" responsive="screen" x-gap="12">
      <n-grid-item class="my-2 mx-4" v-for="t in store.sortedTodos" :key="t._id">
        <Todo :todo="t"></Todo>
      </n-grid-item>
      <n-grid-item class="flex items-center" cols="1 s:1 m:2 l:3 xl:5 2xl:5" responsive="screen" x-gap="12">
        <n-button class="p-7 text-2xl" type="primary" size="large" @click="router.push({ name: 'addTodo' })" circle>
          +
        </n-button>
      </n-grid-item>
    </n-grid>
  </div> -->

  <n-divider title-placement="left">
    <span class="text-2xl">{{ title }}</span>
  </n-divider>
  <!-- <i class='bx bx-plus-medical ml-8 text-4xl my-auto cursor-pointer' style="color: #18a058"></i> -->

  <div class="flex flex-row mx-7">
    <n-collapse>
      <n-card class="w-3/12 shadow-md" style="padding: 0">
        <n-collapse-item title="Add New Feature TodoList 🧠" name="1">

          <template #header-extra>
            <n-checkbox class="mx-3" size="large" @click.stop></n-checkbox>
            <n-popover @click.stop style="padding: 0" trigger="click" placement="left-start">
              <template #trigger>
                <img ref="menu" src="@/assets/more-svgrepo-com.svg" width="15" />
              </template>
              <p class="text-center px-14 py-2" @click="changePin(todo._id, !todo.pin)">
                {{ todo.pin ? "Unpin 📌" : "Pin 📌" }}
              </p>
              <hr>
              <p class="text-center px-14 py-2" @click="updateTodo(todo._id)">Edit 🖍</p>
              <hr>
              <p class="text-center px-14 py-2" @click="deleteTodo(todo._id)">Delete 🗑</p>
            </n-popover>
          </template>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptas soluta dignissimos tempora at
            reprehenderit adipisci culpa voluptate pariatur quisquam, dolore assumenda hic odio quaerat quasi, id optio
            facere provident.</p>
        </n-collapse-item>
      </n-card>

      <n-card class="w-3/12 shadow-md mt-5" style="padding: 0">
        <n-collapse-item title="Add New Feature TodoList 🧠" name="2">

          <template #header-extra>
            <n-checkbox class="mx-3" size="large" @click.stop></n-checkbox>
            <n-popover @click.stop style="padding: 0" trigger="click" placement="left-start">
              <template #trigger>
                <img ref="menu" src="@/assets/more-svgrepo-com.svg" width="15" />
              </template>
              <p class="text-center px-14 py-2" @click="changePin(todo._id, !todo.pin)">
                {{ todo.pin ? "Unpin 📌" : "Pin 📌" }}
              </p>
              <hr>
              <p class="text-center px-14 py-2" @click="updateTodo(todo._id)">Edit 🖍</p>
              <hr>
              <p class="text-center px-14 py-2" @click="deleteTodo(todo._id)">Delete 🗑</p>
            </n-popover>
          </template>

          <div>good</div>
        </n-collapse-item>
      </n-card>


      <n-card class="w-3/12 shadow-md mt-5" style="padding: 0">
        <n-collapse-item title="Add New Feature TodoList 🧠" name="3">

          <template #header-extra>
            <n-checkbox class="mx-3" size="large" @click.stop></n-checkbox>
            <n-popover @click.stop style="padding: 0" trigger="click" placement="left-start">
              <template #trigger>
                <img ref="menu" src="@/assets/more-svgrepo-com.svg" width="15" />
              </template>
              <p class="text-center px-14 py-2" @click="changePin(todo._id, !todo.pin)">
                {{ todo.pin ? "Unpin 📌" : "Pin 📌" }}
              </p>
              <hr>
              <p class="text-center px-14 py-2" @click="updateTodo(todo._id)">Edit 🖍</p>
              <hr>
              <p class="text-center px-14 py-2" @click="deleteTodo(todo._id)">Delete 🗑</p>
            </n-popover>
          </template>


          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptas soluta dignissimos tempora at
            reprehenderit adipisci culpa voluptate pariatur quisquam, dolore assumenda hic odio quaerat quasi, id optio
            facere provident.</p>
        </n-collapse-item>
      </n-card>
    </n-collapse>

  </div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue'
// import { useRouter } from "vue-router";
// import { useStore } from "@/stores";

const props = defineProps({
  title: String
})

const { title } = toRefs(props)

// const router = useRouter();
// const store = useStore();
</script>

<style>
.carousel__prev {
  display: none;
}

.carousel__next {

  background-color: rgb(255, 255, 255);
  color: #18a058;

  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .4), 0 1px 2px 0 rgba(0, 0, 0, .06)
}

.n-collapse-item__header-main {
  font-size: 15px !important;
}
</style>
