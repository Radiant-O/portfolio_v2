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

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        <!-- Contact Form -->
        <div
          class="contact-form bg-gray-50 dark:bg-gray-800 rounded-xl p-8 xl:col-span-2"
        >
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Send Me a Message
          </h2>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label class="block text-gray-700 dark:text-gray-300 mb-2"
                >Name</label
              >
              <input
                v-model="formData.name"
                type="text"
                required
                class="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label class="block text-gray-700 dark:text-gray-300 mb-2"
                >Email</label
              >
              <input
                v-model="formData.email"
                type="email"
                required
                class="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label class="block text-gray-700 dark:text-gray-300 mb-2"
                >Subject</label
              >
              <input
                v-model="formData.subject"
                type="text"
                required
                class="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label class="block text-gray-700 dark:text-gray-300 mb-2"
                >Message</label
              >
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

 <!-- Contact Information -->
<div class="space-y-8">
  <!-- Direct Contact -->
  <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8">
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
      Contact Information
    </h2>
    <div class="space-y-6">
      <div v-for="info in contactInfo" 
           :key="info.title"
           class="flex items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
        <div class="w-12 h-12 flex items-center justify-center bg-primary-100 dark:bg-primary-900 rounded-full">
          <i :class="[info.icon, 'text-xl text-primary-600 dark:text-primary-400']"></i>
        </div>
        <div class="ml-4 min-w-0"> <!-- Added min-w-0 to allow text truncation -->
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ info.title }}</h3>
          <a :href="info.link" 
             class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 block truncate">
            {{ info.displayValue }}
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import AnimatedBackground from "../components/AnimatedBackground.vue";

const formData = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);
const showSuccess = ref(false);

const contactInfo = ref([
  {
    icon: "fas fa-envelope",
    title: "Email",
    value: "bukoyeabiodunisrael@gmail.com",
    link: "mailto:bukoyeabiodunisrael@gmail.com",
    displayValue: "bukoyeabiodunisrael@gmail.com"
  },
  {
    icon: "fab fa-whatsapp",
    title: "WhatsApp",
    value: "Chat on WhatsApp",
    link: "https://wa.me/2347063197389",
    displayValue: "Chat on WhatsApp"
  }
]);

const socialLinks = ref([
  {
    icon: "fab fa-github",
    title: "GitHub",
    link: "https://github.com/radiant-O",
  },
  {
    icon: "fab fa-linkedin",
    title: "LinkedIn",
    link: "https://linkedin.com/in/your-profile",
  },
  {
    icon: "fab fa-twitter",
    title: "Twitter",
    link: "https://twitter.com/your-handle",
  },
  {
    icon: "fab fa-dev",
    title: "Dev.to",
    link: "https://dev.to/your-profile",
  },
]);
const handleSubmit = async () => {
  isSubmitting.value = true;

  // Simulate form submission
  await new Promise((resolve) => setTimeout(resolve, 1500));

  showSuccess.value = true;
  isSubmitting.value = false;

  // Reset form
  formData.value = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  // Hide success message after 3 seconds
  setTimeout(() => {
    showSuccess.value = false;
  }, 3000);
};

onMounted(() => {
  // Animate contact info cards
  gsap.from(".contact-card", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
  });

  // Animate form
  gsap.from(".contact-form", {
    opacity: 0,
    x: 50,
    duration: 1,
    ease: "power3.out",
  });

  // Animate social links
  gsap.from(".social-link", {
    opacity: 0,
    y: 20,
    duration: 0.6,
    stagger: 0.1,
    ease: "power3.out",
    delay: 0.5,
  });
});
</script>
