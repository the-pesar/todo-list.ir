import { defineStore } from "pinia";

export const useHelperStore = defineStore("helper", {
  state: () => {
    return {
      dragOver: "",
    };
  },
});
