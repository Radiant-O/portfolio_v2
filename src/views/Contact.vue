<template>
  <div class="min-h-screen py-20">
    <AnimatedBackground />
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Get in Touch
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Have a question or want to work together? I'd love to hear from you.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <!-- Contact Info Cards -->
        <div
          v-for="info in contactInfo"
          :key="info.title"
          class="contact-card bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
        >
          <div class="text-4xl mb-4">{{ info.icon }}</div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {{ info.title }}
          </h3>
          <a
            :href="info.link"
            class="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
          >
            {{ info.value }}
          </a>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        <!-- Contact Form -->
        <div class="contact-form bg-gray-50 dark:bg-gray-800 rounded-xl p-8 xl:col-span-2">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Send Me a Message
          </h2>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label class="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
              <input
                v-model="formData.name"
                type="text"
                required
                class="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label class="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <input
                v-model="formData.email"
                type="email"
                required
                class="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label class="block text-gray-700 dark:text-gray-300 mb-2">Subject</label>
              <input
                v-model="formData.subject"
                type="text"
                required
                class="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label class="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <textarea
                v-model="formData.message"
                required
                rows="4"
                class="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              ></textarea>
            </div>
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="isSubmitting">Sending...</span>
              <span v-else>Send Message</span>
            </button>
            <!-- Success Message -->
            <div
              v-if="showSuccess"
              class="text-green-600 dark:text-green-400 text-center"
            >
              Message sent successfully!
            </div>
          </form>
        </div>

        <!-- Social Links & Map -->
        <div class="space-y-8">
          <!-- Social Links -->
          <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Connect With Me
            </h2>
            <div class="grid grid-cols-3 gap-4">
              <a
                v-for="link in socialLinks"
                :key="link.name"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="social-link flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow duration-200"
              >
                <span class="text-3xl mb-2">{{ link.icon }}</span>
                <span class="text-gray-700 dark:text-gray-300">{{ link.name }}</span>
              </a>
            </div>
          </div>

          <!-- Map -->
          <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 h-[300px]">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Location
            </h2>
            <!-- Add your map component or iframe here -->
            <div class="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-lg">
              <!-- Map placeholder -->
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

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const contactInfo = ref([
  {
    icon: '📧',
    title: 'Email',
    value: 'contact@example.com',
    link: 'mailto:contact@example.com'
  },
  {
    icon: '📱',
    title: 'Phone',
    value: '+1 234 567 890',
    link: 'tel:+1234567890'
  },
  {
    icon: '📍',
    title: 'Location',
    value: 'New York, NY',
    link: 'https://maps.google.com'
  }
])

const socialLinks = ref([
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: '🐱'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: '💼'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: '🐦'
  }
])

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  showSuccess.value = true
  isSubmitting.value = false
  
  // Reset form
  formData.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
  
  // Hide success message after 3 seconds
  setTimeout(() => {
    showSuccess.value = false
  }, 3000)
}

onMounted(() => {
  // Animate contact info cards
  gsap.from('.contact-card', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
  })

  // Animate form
  gsap.from('.contact-form', {
    opacity: 0,
    x: 50,
    duration: 1,
    ease: 'power3.out'
  })

  // Animate social links
  gsap.from('.social-link', {
    opacity: 0,
    y: 20,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power3.out',
    delay: 0.5
  })
})

</script>
