<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedBackground from '../components/AnimatedBackground.vue'

const stats = ref([
  { label: 'Years Experience', value: '5+' },
  { label: 'Projects Completed', value: '50+' },
  { label: 'Satisfied Clients', value: '30+' },
  { label: 'Technologies', value: '15+' }
])

const experiences = ref([
  {
    role: 'Senior Frontend Developer',
    company: 'Tech Solutions Inc.',
    period: '2021 - Present',
    description: 'Leading frontend development team, implementing modern web solutions using Vue.js, React, and other cutting-edge technologies.'
  },
  {
    role: 'Frontend Developer',
    company: 'Digital Innovations',
    period: '2019 - 2021',
    description: 'Developed responsive web applications and maintained existing client projects using Vue.js and related technologies.'
  },
  {
    role: 'Web Developer',
    company: 'Creative Agency',
    period: '2018 - 2019',
    description: 'Created engaging web experiences for various clients, focusing on responsive design and user experience.'
  }
])

onMounted(() => {
  // Profile section animation
  gsap.from('.profile-content', {
    opacity: 0,
    x: -50,
    duration: 1,
    ease: 'power3.out'
  })
  
  gsap.from('.profile-image', {
    opacity: 0,
    x: 50,
    duration: 1,
    ease: 'power3.out'
  })

  // Stats animation
  gsap.from('.stat-item', {
    scrollTrigger: {
      trigger: '.stats-section',
      start: 'top center+=100',
      toggleActions: 'play none none reverse'
    },
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2
  })

  // Experience timeline animation
  gsap.from('.experience-item', {
    scrollTrigger: {
      trigger: '.experience-section',
      start: 'top center+=100',
      toggleActions: 'play none none reverse'
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3
  })
})
</script>

<template>
  <div class="relative min-h-screen py-20">
    <AnimatedBackground />
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <!-- Profile Section -->
        <section>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div class="profile-content">
              <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                About Me
              </h1>
              <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Hello! I'm Radiant, a passionate frontend developer with a keen eye for creating beautiful and functional web experiences. With over 5 years of experience in web development, I specialize in building responsive, user-friendly applications using modern technologies.
              </p>
              <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                My journey in web development started with a curiosity for creating interactive user interfaces. Today, I combine my technical expertise with creative problem-solving to deliver exceptional digital solutions.
              </p>
              <div class="flex space-x-4">
                <a
                  href="#contact"
                  class="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200"
                >
                  Get in Touch
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  class="px-6 py-3 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-400 dark:hover:text-gray-900 rounded-lg transition-colors duration-200"
                >
                  Download CV
                </a>
              </div>
            </div>
            <div class="profile-image">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="Profile"
                class="w-full h-[500px] object-cover rounded-lg shadow-xl mt-10"
              />
            </div>
          </div>
        </section>

        <!-- Stats Section -->
        <section class="stats-section py-16">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div
              v-for="(stat, index) in stats"
              :key="index"
              class="stat-item text-center"
            >
              <div class="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {{ stat.value }}
              </div>
              <div class="text-gray-600 dark:text-gray-300">
                {{ stat.label }}
              </div>
            </div>
          </div>
        </section>


        <!-- Experience Section -->
        <section class="experience-section">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-12">
            Professional Experience
          </h2>
          <div class="space-y-12">
            <div
              v-for="(exp, index) in experiences"
              :key="index"
              class="experience-item relative pl-8 border-l-2 border-primary-600 dark:border-primary-400"
            >
              <div class="absolute w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full -left-[9px] top-0"></div>
              <div class="mb-1 text-sm text-gray-500 dark:text-gray-400">
                {{ exp.period }}
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                {{ exp.role }}
              </h3>
              <div class="text-primary-600 dark:text-primary-400 mb-2">
                {{ exp.company }}
              </div>
              <p class="text-gray-600 dark:text-gray-300">
                {{ exp.description }}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
