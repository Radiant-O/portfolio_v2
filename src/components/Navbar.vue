<script setup>
import { ref, onMounted } from 'vue'
import { useThemeStore } from '../stores/theme'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'
import gsap from 'gsap'

const router = useRouter()
const themeStore = useThemeStore()

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/skills' },
  { name: 'Contact', href: '/contact' },
]

const isCurrentRoute = (href) => {
  return router.currentRoute.value.path === href
}

onMounted(() => {
  gsap.from('.nav-item', {
    opacity: 0,
    y: -20,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power2.out'
  })
})
</script>

<template>
  <Disclosure as="nav" class="bg-white dark:bg-gray-800 fixed w-full top-0 z-50 shadow-md" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between">
        <div class="flex">
          <div class="flex flex-shrink-0 items-center">
            <router-link to="/" class="text-2xl font-bold text-primary-600 dark:text-primary-400">
              Radiant
            </router-link>
          </div>
        </div>
        
        <!-- Desktop menu -->
        <div class="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
          <template v-for="item in navigation" :key="item.name">
            <router-link
              :to="item.href"
              class="nav-item px-3 py-2 text-sm font-medium transition-colors duration-200"
              :class="[
                isCurrentRoute(item.href)
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'
              ]"
            >
              {{ item.name }}
            </router-link>
          </template>
          
          <!-- Theme toggle -->
          <button
            @click="themeStore.toggleTheme"
            class="nav-item rounded-lg p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <SunIcon v-if="themeStore.isDark" class="h-5 w-5" />
            <MoonIcon v-else class="h-5 w-5" />
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="flex items-center sm:hidden">
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <template v-for="item in navigation" :key="item.name">
          <router-link
            :to="item.href"
            class="block px-3 py-2 text-base font-medium transition-colors duration-200"
            :class="[
              isCurrentRoute(item.href)
                ? 'text-primary-600 dark:text-primary-400'
                : 'text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'
            ]"
          >
            {{ item.name }}
          </router-link>
        </template>
        
        <!-- Mobile theme toggle -->
        <button
          @click="themeStore.toggleTheme"
          class="w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
        >
          <div class="flex items-center">
            <SunIcon v-if="themeStore.isDark" class="h-5 w-5 mr-2" />
            <MoonIcon v-else class="h-5 w-5 mr-2" />
            <span>{{ themeStore.isDark ? 'Light Mode' : 'Dark Mode' }}</span>
          </div>
        </button>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
