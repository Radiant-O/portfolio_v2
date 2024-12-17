<script setup>
import { onMounted } from 'vue'
import { useThemeStore } from './stores/theme'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import HelloWorld from './components/HelloWorld.vue'

const themeStore = useThemeStore()

onMounted(() => {
  themeStore.initTheme()
})
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <Navbar />
    <main>
      <router-view v-slot="{ Component }">
        <transition 
          name="page" 
          mode="out-in"
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave"
        >
          <component :is="Component" />
        </transition>
      </router-view>
      <!-- <HelloWorld msg="Vite + Vue" /> -->
    </main>
    <Footer />
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0
      el.style.transform = 'translateY(20px)'
    },
    enter(el, done) {
      gsap.to(el, {
        duration: 0.6,
        opacity: 1,
        y: 0,
        onComplete: done
      })
    },
    leave(el, done) {
      gsap.to(el, {
        duration: 0.6,
        opacity: 0,
        y: -20,
        onComplete: done
      })
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Poppins', sans-serif;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
