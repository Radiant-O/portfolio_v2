<template>
  <div class="relative min-h-screen">
    <!-- Background Icons -->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800"></div>
      <div v-for="icon in backgroundIcons" :key="icon.id" 
           class="floating-icon absolute"
           :style="{ left: icon.x + '%', top: icon.y + '%' }">
        <i :class="icon.class" class="text-2xl sm:text-3xl opacity-20 dark:opacity-40"></i>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="hero-section min-h-screen flex items-center justify-center px-4">
      <div class="text-center">
        <h1 class="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          Hi, I'm <span class="text-primary-600 dark:text-primary-400">Radiant</span>
        </h1>
        <p class="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          An AI Software Engineer crafting intelligent solutions and automated systems
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            @click="navigateToProjects"
            class="w-full sm:w-auto bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 duration-300"
          >
            View My Projects
          </button>
          <button 
            @click="scrollToSkills"
            class="w-full sm:w-auto border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg hover:bg-primary-600 hover:text-white duration-300"
          >
            Explore Skills
          </button>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-8">
      <div class="absolute inset-0 bg-white/90 dark:bg-gray-700/30 backdrop-blur-sm"></div>
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
          What I Do
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <div v-for="skill in skills" :key="skill.title"
               class="skill-card p-8 rounded-xl bg-white dark:bg-gray-800 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div class="flex items-center justify-center mb-6">
              <i :class="skill.icon" class="text-4xl sm:text-5xl text-primary-600 dark:text-primary-400"></i>
            </div>
            <h3 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {{ skill.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              {{ skill.description }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in skill.technologies" :key="tech"
                    class="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const router = useRouter()

// Background Icons
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
  backgroundIcons.value = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    class: iconClasses[Math.floor(Math.random() * iconClasses.length)]
  }))
}

const skills = ref([
  {
    title: 'AI Development',
    description: 'Building cutting-edge AI solutions and intelligent systems that transform business operations.',
    icon: 'fas fa-brain fa-bounce',
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Neural Networks']
  },
  {
    title: 'Automation',
    description: 'Creating sophisticated automation systems that streamline workflows and boost efficiency.',
    icon: 'fas fa-robot fa-beat',
    technologies: ['Python', 'Node.js', 'RPA', 'Process Automation']
  },
  {
    title: 'ML Integration',
    description: 'Seamlessly integrating machine learning models into scalable applications.',
    icon: 'fas fa-microchip fa-pulse',
    technologies: ['Scikit-learn', 'Deep Learning', 'API Integration', 'MLOps']
  }
])

onMounted(() => {
  generateIcons()

  // Animate floating icons
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

  // Hero animations
  const tl = gsap.timeline()
  
  tl.from('.hero-section h1', {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  })
  .from('.hero-section p', {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  }, '-=0.5')
  .from('.hero-section button', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
  }, '-=0.5')

  // Skills animations
  const skillCards = gsap.utils.toArray('.skill-card')
  skillCards.forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: i * 0.2,
      ease: 'power3.out'
    })
  })
})

const scrollToSkills = () => {
  const skillsSection = document.getElementById('skills')
  if (skillsSection) {
    skillsSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const navigateToProjects = () => {
  router.push('/projects')
}
</script>

<style scoped>
.floating-icon {
  will-change: transform;
  transform-style: preserve-3d;
}

.skill-card {
  isolation: isolate;
}

.hero-section {
  isolation: isolate;
}

@media (max-width: 640px) {
  .floating-icon {
    display: none;
  }
}
</style>
