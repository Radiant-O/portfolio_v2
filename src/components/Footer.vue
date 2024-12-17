<script setup>
import { ref } from 'vue'
import { useThemeStore } from '../stores/theme'

const themeStore = useThemeStore()
const currentYear = new Date().getFullYear()

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'i-mdi-github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'i-mdi-linkedin'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: 'i-mdi-twitter'
  }
]
</script>

<template>
  <footer class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div class="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <!-- Logo -->
        <div class="text-2xl font-bold text-primary-600 dark:text-primary-400 md:w-1/4">
          Radiant
        </div>

        <!-- Navigation -->
        <nav class="flex space-x-6 md:w-1/2">
          <router-link
            v-for="item in ['Home', 'About', 'Projects', 'Skills', 'Contact']"
            :key="item"
            :to="'/' + (item === 'Home' ? '' : item.toLowerCase())"
            class="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors duration-200"
          >
            {{ item }}
          </router-link>
        </nav>

        <!-- Social Links -->
        <div class="flex space-x-6 md:w-1/4">
          <a
            v-for="link in socialLinks"
            :key="link.name"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors duration-200"
          >
            <span class="sr-only">{{ link.name }}</span>
            <i :class="link.icon" class="text-2xl"></i>
          </a>
        </div>

        <!-- Copyright -->
        <div class="text-gray-500 dark:text-gray-400 text-sm md:w-full md:text-center">
          &copy; {{ currentYear }} Radiant. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>
