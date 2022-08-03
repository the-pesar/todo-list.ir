import { ref } from "vue";

const theme = ref(localStorage.getItem("theme") || "light");
document.body.setAttribute("theme", theme.value);
console.log('compos');

export default function useTheme() {
  function setTheme(t) {
    localStorage.setItem("theme", t);
    document.body.setAttribute("theme", t);
    theme.value = t;
  }

  return { theme, setTheme };
}