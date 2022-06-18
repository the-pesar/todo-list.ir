<template>
  <n-divider title-placement="left">
    <span class="text-2xl">{{ title }}</span>
  </n-divider>
  <!-- <i class='bx bx-plus-medical ml-8 text-4xl my-auto cursor-pointer' style="color: #18a058"></i> -->

  <div class="flex flex-row mx-7">
    <n-collapse>
      <n-grid cols="1 s:1 m:2 l:3 xl:4 2xl:5" responsive="screen" x-gap="12">
        <n-grid-item v-for="t in todos" :key="t.id">
          <n-card class="mb-2 shadow-md">
            <n-collapse-item title="Add New Feature TodoList 🧠" :name="t.id">

              <template #header-extra>
                <n-checkbox :checked="t.check" class="mx-3" size="large" @click.stop></n-checkbox>
                <n-popover style="padding: 0" trigger="click" placement="left-start">
                  <template #trigger>
                    <img @click="alert('hello world')" ref="menu" src="@/assets/more-svgrepo-com.svg" width="15" />
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
                reprehenderit adipisci culpa voluptate pariatur quisquam, dolore assumenda hic odio quaerat quasi, id
                optio
                facere provident.</p>
            </n-collapse-item>
          </n-card>
        </n-grid-item>
      </n-grid>
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

const todos = [
  {
    id: 0,
    title: "tttt",
    desc: "desc",
    check: true
  },
  {
    id: 1,
    title: "tttt",
    desc: "desc",
    check: false
  },
  {
    id: 2,
    title: "tttt",
    desc: "desc",
    check: true
  },
  {
    id: 3,
    title: "tttt1",
    desc: "desc",
    check: false
  },
  {
    id: 4,
    title: "tttt",
    desc: "desc",
    check: true
  }
]

</script>

<style>

.n-collapse-item__header-main {
  font-size: 15px !important;
}
</style>
