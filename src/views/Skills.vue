<template>
  <div class="min-h-screen py-20 relative">
    <AnimatedBackground />
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Skills & Technologies
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          My technical toolkit and areas of expertise
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="category in skillCategories" 
             :key="category.title" 
             class="skill-category bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <i :class="[category.icon, 'text-primary-600 dark:text-primary-400 mr-3']"></i>
            {{ category.title }}
          </h2>
          
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div v-for="skill in category.skills" 
                 :key="skill.name" 
                 class="skill-item flex flex-col items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
              <i :class="[skill.icon, 'text-2xl mb-2 text-gray-700 dark:text-gray-300']"></i>
              <span class="text-sm text-gray-600 dark:text-gray-400 text-center">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skill-category {
  transition: transform 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-5px);
}

.skill-item {
  cursor: pointer;
}

.skill-item:hover i {
  transform: scale(1.2);
  transition: transform 0.3s ease;
}
</style>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import AnimatedBackground from '../components/AnimatedBackground.vue'

const skillCategories = ref([
  {
    title: 'Frontend Development',
    icon: 'fas fa-laptop-code',
    skills: [
      { name: 'Vue.js', icon: 'fab fa-vuejs' },
      { name: 'React', icon: 'fab fa-react' },
      { name: 'React Native', icon: 'fab fa-react' },
      { name: 'JavaScript', icon: 'fab fa-js' },
      { name: 'TypeScript', icon: 'fab fa-js' },
      { name: 'Tailwind CSS', icon: 'fab fa-css3' },
      { name: 'GSAP', icon: 'fas fa-magic' }
    ]
  },
  {
    title: 'Backend & DevOps',
    icon: 'fas fa-server',
    skills: [
      { name: 'Node.js', icon: 'fab fa-node-js' },
      { name: 'Python', icon: 'fab fa-python' },
      { name: 'MongoDB', icon: 'fas fa-database' },
      { name: 'AWS', icon: 'fab fa-aws' },
      { name: 'Azure', icon: 'fab fa-microsoft' },
      { name: 'Docker', icon: 'fab fa-docker' },
      { name: 'Git', icon: 'fab fa-git-alt' }
    ]
  },
  {
    title: 'AI Automation',
    icon: 'fas fa-robot',
    skills: [
      { name: 'Make.com', icon: 'fas fa-cogs' },
      { name: 'Vapi', icon: 'fas fa-microphone' },
      { name: 'VoiceFlow', icon: 'fas fa-comment-dots' },
      { name: 'Retell', icon: 'fas fa-headset' },
      { name: 'Zapier', icon: 'fas fa-bolt' },
      { name: 'n8n', icon: 'fas fa-network-wired' },
      { name: 'OpenAI', icon: 'fas fa-brain' }
    ]
  },
  {
    title: 'Development Tools',
    icon: 'fas fa-tools',
    skills: [
      { name: 'VS Code', icon: 'fas fa-code' },
      { name: 'Figma', icon: 'fab fa-figma' },
      { name: 'Postman', icon: 'fas fa-paper-plane' },
      { name: 'npm', icon: 'fab fa-npm' },
      { name: 'GitHub', icon: 'fab fa-github' },
      { name: 'Terminal', icon: 'fas fa-terminal' }
    ]
  },
  {
    title: 'Technical Writing',
    icon: 'fas fa-pen-fancy',
    skills: [
      { name: 'Notion', icon: 'fas fa-book-open' },
      { name: 'Markdown', icon: 'fab fa-markdown' },
      { name: 'Medium', icon: 'fab fa-medium' },
      { name: 'HashNode', icon: 'fas fa-hashtag' },
      { name: 'Google Docs', icon: 'fas fa-file-alt' }
    ]
  }
])

onMounted(() => {
  // Animate categories
  gsap.from('.skill-category', {
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
  })

  // Animate skills within categories
  gsap.from('.skill-item', {
    opacity: 0,
    scale: 0.8,
    duration: 0.5,
    stagger: 0.1,
    ease: 'back.out(1.7)'
  })
})
</script>

<!-- <script setup>
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
    { name: 'JavaScript/TypeScript', level: 90 },
    { name: 'Vue.js', level: 95 },
    { name: 'React', level: 85 },
    { name: 'React Native', level: 85 },
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
    'React Native': 'fab fa-react',
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
</script> -->

<!-- <style scoped>
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
</style> -->
