<template>
  <div class="absolute inset-0 -z-10 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800"></div>
    <div v-for="icon in backgroundIcons" :key="icon.id" 
         class="floating-icon absolute"
         :style="{ left: icon.x + '%', top: icon.y + '%' }">
      <i :class="icon.class" class="text-lg sm:text-2xl opacity-20 dark:opacity-40"></i>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const iconClasses = [
  'fas fa-code fa-bounce',
  'fas fa-brain fa-beat',
  'fas fa-robot fa-spin',
  'fas fa-microchip fa-pulse',
  'fas fa-network-wired fa-flip',
  'fas fa-database fa-beat',
  'fas fa-cloud fa-bounce',
  'fas fa-cogs fa-spin'
]

const backgroundIcons = ref([])

const generateIcons = () => {
  const iconCount = window.innerWidth < 640 ? 15 : 30

  backgroundIcons.value = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    class: iconClasses[Math.floor(Math.random() * iconClasses.length)]
  }))
}

onMounted(() => {
  generateIcons()

  window.addEventListener('resize', generateIcons)

  gsap.to('.floating-icon', {
    y: 'random(-200, 200)',
    x: 'random(-200, 200)',
    rotation: 'random(-360, 360)',
    duration: 'random(5, 10)',
    ease: 'none',
    repeat: -1,
    yoyo: true,
    stagger: {
      amount: 6,
      from: 'random'
    }
  })
})
</script>

<style scoped>
.floating-icon {
  will-change: transform;
  transform-style: preserve-3d;
}

</style>