<template>
  <div class="flex flex-col items-center justify-center mt-5">

    <div v-for="btn in buttons" :key="btn.name" class="flex rounded-xl p-1 mb-2.5 w-11/12 cursor-pointer"
      :class="activeButton === btn.name ? 'menu-btn-active' : 'menu-btn'" @click="setActive(btn.name)">
      <i class="bx text-2xl ml-3 text-[#00ba7c]" :class="`bx-${btn.icon}`"></i>
      <button class="mx-6 font-semibold outline-none" v-text="btn.text"></button>
    </div>

  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useLoadingBar } from "naive-ui";

const router = useRouter();
const route = useRoute();
const loadingBar = useLoadingBar();

const activeButton = ref(route.name || "todos");

const buttons = [
  {
    text: "Todos",
    icon: "notepad",
    name: "todos",
  },
  {
    text: "Notes",
    icon: "cube-alt",
    name: "notes",
  },
  {
    text: "Vision",
    icon: "pyramid",
    name: "vision",
  },
  {
    text: "Settings",
    icon: "hive",
    name: "settings",
  },
];

const setActive = (btn) => {
  activeButton.value = btn;

  loadingBar.start();

  setTimeout(() => {
    loadingBar.finish();
  }, 200);

  router.push({ name: btn });
};

</script>
<style scoped>
.menu-btn {
  border: 1px dashed transparent;
}

.menu-btn:hover {
  color: #00ba7c;
  border: 1px dashed #00ba7c;
  transition: all 0.2s;
}

.menu-btn-active {
  background-color: rgba(0, 186, 124, 0.15);
  color: #00ba7c;
  border: 1px dashed rgba(0, 186, 124, 0.15);
  transition: all 0.2s;
}
</style>