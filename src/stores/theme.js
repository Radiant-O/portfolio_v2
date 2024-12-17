import { ref } from 'vue'
import { useStorage } from '@vueuse/core'

export const useThemeStore = () => {
  const theme = useStorage('theme', 'light')
  const isDark = ref(theme.value === 'dark')

  const toggleTheme = () => {
    isDark.value = !isDark.value
    theme.value = isDark.value ? 'dark' : 'light'
    document.documentElement.classList.toggle('dark', isDark.value)
  }

  // Initialize theme
  const initTheme = () => {
    document.documentElement.classList.toggle('dark', isDark.value)
  }

  return {
    isDark,
    toggleTheme,
    initTheme
  }
}
