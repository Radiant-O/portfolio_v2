<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedBackground from '../components/AnimatedBackground.vue'

const stats = ref([
  { label: 'Years Experience', value: '3+' },
  { label: 'Projects Completed', value: '30+' },
  { label: 'Satisfied Clients', value: '18+' },
  { label: 'Technologies', value: '10+' }
])

const experiences = ref([
  {
    role: 'Frontend Developer',
    company: 'iSalesBook',
    period: '2024',
    description: 'Leading frontend development team, implementing modern web solutions using Vue.js, React, and other cutting-edge technologies.'
  },
  {
    role: 'Lead Frontend Engineer',
    company: 'PaddleTech',
    period: '2022 - 2023',
    description: 'Developed responsive web applications and maintained existing client projects using Reactjs and related technologies.'
  },
  {
    role: 'Frontend Developer',
    company: 'RugField Health Technologies',
    period: '2022 - 2023',
    description: 'Implemented complex web solutions, ensuring optimal user experience and performance using Reactjs and related technologies.'
  },
  {
    role: 'AI Automation Engineer',
    company: 'CodeSphereAI',
    period: '2024',
    description: 'Developed sophisticated AI automation systems, automating workflows and boosting efficiency using chatbot and Voice Assistants.'
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
                Hello! I'm Abiodun Bukoye, a passionate Frontend Engineer with expertise in building modern web applications. With over 3 years of experience, I specialize in creating responsive, user-friendly interfaces using Vue.js, React, and React Native. I combine my technical skills with creative problem-solving to deliver exceptional digital solutions.
              </p>
              <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Beyond frontend development, I'm deeply involved in AI automation, crafting sophisticated systems with chatbots and voice assistants to streamline workflows. I also share my knowledge through technical writing, creating comprehensive documentation and tutorials that make complex topics accessible to others.
              </p>
              <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#contact"
                  class="w-full sm:w-auto px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white hover:text-white rounded-lg transition-colors duration-200 text-center"
                >
                  Get in Touch
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  class="w-full sm:w-auto px-6 py-3 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-400 dark:hover:text-gray-900 rounded-lg transition-colors duration-200 text-center"
                >
                  Download CV
                </a>
              </div>
            </div>
            <div class="profile-image">
              <img
                src="https://res.cloudinary.com/din5vdwsr/image/upload/v1734551944/radiant_olfitu.png"
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
