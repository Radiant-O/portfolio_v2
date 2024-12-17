<template>
  <div class="relative min-h-screen py-20">
    <AnimatedBackground />
    <!-- Background Icons -->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800"></div>
      <div v-for="icon in backgroundIcons" :key="icon.id" 
           class="floating-icon absolute"
           :style="{ left: icon.x + '%', top: icon.y + '%' }">
        <i :class="icon.class" class="text-2xl sm:text-3xl opacity-20 dark:opacity-40"></i>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Skills & Expertise
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and expertise in various technologies.
        </p>
      </div>

      <!-- Skills Section -->
      <div class="skills-section grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <!-- Frontend Skills -->
        <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <i class="fas fa-code text-primary-600 dark:text-primary-400 mr-3"></i>
            Frontend Development
          </h2>
          <div class="space-y-6">
            <div v-for="skill in skills.frontend" :key="skill.name">
              <div class="flex justify-between mb-2">
                <span class="text-gray-700 dark:text-gray-300 flex items-center">
                  <i :class="getSkillIcon(skill.name)" class="mr-2 text-primary-600 dark:text-primary-400"></i>
                  {{ skill.name }}
                </span>
                <span class="text-primary-600 dark:text-primary-400">{{ skill.level }}%</span>
              </div>
              <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  class="skill-bar-fill h-full bg-primary-600 dark:bg-primary-400 rounded-full"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Backend Skills -->
        <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <i class="fas fa-server text-primary-600 dark:text-primary-400 mr-3"></i>
            Backend Development
          </h2>
          <div class="space-y-6">
            <div v-for="skill in skills.backend" :key="skill.name">
              <div class="flex justify-between mb-2">
                <span class="text-gray-700 dark:text-gray-300 flex items-center">
                  <i :class="getSkillIcon(skill.name)" class="mr-2 text-primary-600 dark:text-primary-400"></i>
                  {{ skill.name }}
                </span>
                <span class="text-primary-600 dark:text-primary-400">{{ skill.level }}%</span>
              </div>
              <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  class="skill-bar-fill h-full bg-primary-600 dark:bg-primary-400 rounded-full"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Technologies Section -->
      <!-- <div class="technologies-section">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center">
          <i class="fas fa-laptop-code text-primary-600 dark:text-primary-400 mr-3"></i>
          Technologies I Work With
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(category, index) in technologies"
            :key="index"
            class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6"
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <i :class="getCategoryIcon(category.category)" class="text-primary-600 dark:text-primary-400 mr-2"></i>
              {{ category.category }}
            </h3>
            <div class="grid grid-cols-2 gap-4">
              <div
                v-for="tech in category.items"
                :key="tech.name"
                class="tech-card flex items-center p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
              >
                <i :class="getTechIcon(tech.name)" class="text-xl text-primary-600 dark:text-primary-400 mr-2"></i>
                <span class="text-gray-700 dark:text-gray-300">{{ tech.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <!-- Tools Section -->
      <div class="tools-section mt-20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <i class="fas fa-tools text-primary-600 dark:text-primary-400 mr-3"></i>
          Development Tools
        </h2>
        <div class="space-y-6">
          <div v-for="skill in skills.tools" :key="skill.name">
            <div class="flex justify-between mb-2">
              <span class="text-gray-700 dark:text-gray-300 flex items-center">
                <i :class="getToolIcon(skill.name)" class="mr-2 text-primary-600 dark:text-primary-400"></i>
                {{ skill.name }}
              </span>
              <span class="text-primary-600 dark:text-primary-400">{{ skill.level }}%</span>
            </div>
            <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                class="skill-bar-fill h-full bg-primary-600 dark:bg-primary-400 rounded-full"
                :style="{ width: skill.level + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import AnimatedBackground from '../components/AnimatedBackground.vue'

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

const skills = ref({
  frontend: [
    { name: 'HTML5/CSS3', level: 95 },
    { name: 'JavaScript/TypeScript', level: 90 },
    { name: 'Vue.js', level: 95 },
    { name: 'React', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'GSAP', level: 85 }
  ],
  backend: [
    { name: 'Node.js', level: 80 },
    { name: 'Express.js', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'RESTful APIs', level: 85 }
  ],
  tools: [
    { name: 'Git/GitHub', level: 90 },
    { name: 'VS Code', level: 95 },
    { name: 'Webpack/Vite', level: 85 },
    { name: 'Docker', level: 70 }
  ]
})

const technologies = ref([
  {
    category: 'Frontend',
    items: [
      { name: 'Vue.js', icon: 'fab fa-vuejs' },
      { name: 'React', icon: 'fab fa-react' },
      { name: 'Tailwind CSS', icon: 'fab fa-css3' },
      { name: 'GSAP', icon: 'fas fa-magic' },
      { name: 'TypeScript', icon: 'fab fa-js' },
      { name: 'Sass/SCSS', icon: 'fab fa-sass' }
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: 'fab fa-node-js' },
      { name: 'Express', icon: 'fas fa-server' },
      { name: 'MongoDB', icon: 'fas fa-database' },
      { name: 'REST APIs', icon: 'fas fa-plug' }
    ]
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git', icon: 'fab fa-git-alt' },
      { name: 'VS Code', icon: 'fas fa-code' },
      { name: 'Webpack', icon: 'fas fa-box-open' },
      { name: 'Docker', icon: 'fab fa-docker' }
    ]
  }
])

const getSkillIcon = (name) => {
  const iconMap = {
    'HTML5/CSS3': 'fab fa-html5',
    'JavaScript/TypeScript': 'fab fa-js',
    'Vue.js': 'fab fa-vuejs',
    'React': 'fab fa-react',
    'Tailwind CSS': 'fab fa-css3',
    'GSAP': 'fas fa-magic',
    'Node.js': 'fab fa-node-js',
    'Express.js': 'fas fa-server',
    'MongoDB': 'fas fa-database',
    'RESTful APIs': 'fas fa-plug'
  }
  return iconMap[name] || 'fas fa-code'
}

const getToolIcon = (name) => {
  const iconMap = {
    'Git/GitHub': 'fab fa-github',
    'VS Code': 'fas fa-code',
    'Webpack/Vite': 'fas fa-box-open',
    'Docker': 'fab fa-docker'
  }
  return iconMap[name] || 'fas fa-tools'
}

const getCategoryIcon = (category) => {
  const iconMap = {
    'Frontend': 'fas fa-desktop',
    'Backend': 'fas fa-server',
    'Tools & Others': 'fas fa-tools'
  }
  return iconMap[category] || 'fas fa-code'
}

const getTechIcon = (name) => {
  const tech = technologies.value
    .flatMap(category => category.items)
    .find(item => item.name === name)
  return tech?.icon || 'fas fa-code'
}

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

  // Animate skill bars
  gsap.from('.skill-bar-fill', {
    scrollTrigger: {
      trigger: '.skills-section',
      start: 'top center+=100',
      toggleActions: 'play none none reverse'
    },
    width: 0,
    duration: 1.5,
    ease: 'power3.out',
    stagger: 0.2
  })

  // Animate technology cards
  gsap.from('.tech-card', {
    scrollTrigger: {
      trigger: '.technologies-section',
      start: 'top center+=100',
      toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1
  })
})
</script>

<style scoped>
.floating-icon {
  will-change: transform;
  transform-style: preserve-3d;
}

.skill-bar-fill {
  transition: width 1.5s ease-out;
}

@media (max-width: 640px) {
  .floating-icon {
    display: none;
  }
}
</style>
