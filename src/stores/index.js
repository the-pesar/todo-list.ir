import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => {
    return {
      dragOver: "",
      loading: false,
      themes: [
        {
          name: "light",
          cardColor: "#fff",
          bgDivider: "transparent",
          bgBody: "#f5f5f5",
          plusColor: "#18a058",
        },
        {
          name: "dark",
          cardColor: "#242526",
          bgDivider: "#242526",
          bgBody: "#18191a",
          plusColor: "#18a058",
        },
        {
          name: "background",
          cardColor: "#f5f5f5",
          bgDivider: "#f5f5f5",
          bgBody: "",
          plusColor: "#f5f5f5",
        },
      ],
      themeKey: localStorage.getItem("theme") || "light",
    };
  },
  getters: {
    theme() {
      return this.themes.find((v) => v.name === this.themeKey);
    },
  },
  actions: {
    changeTheme(theme) {
      this.themeKey = theme;
      localStorage.setItem("theme", theme);
    },
  },
});
