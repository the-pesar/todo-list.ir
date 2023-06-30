export const useThemesStore = defineStore("themes", () => {
  const defaultTheme = "light"
  const theme = ref<Theme>()

  const cachedTheme = localStorage.getItem("theme") as Theme | null
  if (cachedTheme) setTheme(cachedTheme)
  else setTheme(defaultTheme)

  // Light Design is better than dark
  // if (matchMedia("(prefers-color-scheme: dark)").matches) setTheme("dark")
  // else setTheme(defaultTheme)
  // matchMedia("(prefers-color-scheme: dark)").onchange = (e) => e.matches && setTheme("dark")

  function setTheme(newTheme: Theme) {
    theme.value = newTheme
    useHead({ htmlAttrs: { "data-theme": newTheme } })
    localStorage.setItem("theme", newTheme)
  }
  return {
    theme,
    setTheme,
  }
})
