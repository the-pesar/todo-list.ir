export const useThemesStore = defineStore("themes", () => {
  const defaultTheme = "light"
  const theme = ref<Theme>()

  if (matchMedia("(prefers-color-scheme: dark)").matches) setTheme("dark")
  else setTheme(defaultTheme)

  matchMedia("(prefers-color-scheme: dark)").onchange = (e) =>
    e.matches && setTheme("dark")

  function setTheme(newTheme: Theme) {
    theme.value = newTheme
    useHead({ htmlAttrs: { "data-theme": newTheme } })
  }
  return {
    setTheme,
  }
})
