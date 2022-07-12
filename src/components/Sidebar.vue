<template>
  <n-card :bordered="false">
    <div class="flex flex-col items-center justify-center">
      <n-divider dashed>
        <span>Boards</span>
      </n-divider>
      <div
        v-for="btn in buttons"
        :key="btn.name"
        class="flex rounded-3xl p-1 mb-2.5 w-11/12 cursor-pointer"
        :class="activeBtn === btn.name ? 'menu-btn-active' : 'menu-btn'"
        @click="changeActive(btn.name)"
      >
        <i
          class="bx text-2xl ml-3"
          :class="`bx-${btn.icon}`"
          style="color: #00ba7c"
        ></i>
        <button class="mx-6 font-semibold" v-text="btn.text"></button>
      </div>
    </div>
  </n-card>
</template>
<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useLoadingBar } from "naive-ui";

const router = useRouter();
const route = useRoute();
const loadingBar = useLoadingBar();

const activeBtn = ref(route.name || "today");

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

const changeActive = (btn) => {
  activeBtn.value = btn;

  loadingBar.start();
  setTimeout(() => {
    loadingBar.finish();
  }, 200);

  router.push({ name: btn });
};
</script>
<style lang="scss" scoped>
.menu-btn-active {
  background-color: rgba(0, 186, 124, 0.15);
  color: #00ba7c;
  border: 1px dashed rgba(0, 186, 124, 0.15);
  transition: all 0.2s;
}

.menu-btn {
  border: 1px dashed transparent;

  &:hover {
    color: #00ba7c;
    border: 1px dashed #00ba7c;
    transition: all 0.2s;
  }
}
</style>