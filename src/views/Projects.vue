<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import AnimatedBackground from "../components/AnimatedBackground.vue";

const projects = ref([
  {
    title: "CodeSphereAI Website",
    description:
      "A modern agency website with responsive design and interactive features, built using Vue.js, VueMotion and Tailwind CSS.",
    image:
      "https://res.cloudinary.com/din5vdwsr/image/upload/v1734551897/csai_h6ofdl.png",
    tags: ["Vue.js", "Tailwind CSS", "Node.js"],
    link: "https://codesphereai.com",
  },
  {
    title: "Tomilison Website",
    description:
      "A creative portfolio website for a law agency with smooth animations and interactive elements, built using Vue.js and GSAP.",
    image:
      "https://res.cloudinary.com/din5vdwsr/image/upload/v1734551907/tomlison_hygaxq.png",
    tags: ["Wix"],
    link: "https://www.tomilison.com",
  },
  {
    title: "EaseSpace",
    description:
      "A comprehensive wellness platform designed to help users achieve mental peace and well-being through meditation and breathing exercises.",
    image:
      "https://res.cloudinary.com/din5vdwsr/image/upload/v1734608900/ease_n5fokt.png",
    tags: ["Vue.js", "Firebase", "Vuex, Bootstrap"],
    link: "https://easespace.netlify.app",
  },
  {
    title: "Unique Telecom",
    description:
      "A Simple Telecommunication website for buying and selling telecom services.",
    image:
      "https://res.cloudinary.com/din5vdwsr/image/upload/v1734551897/uniq_hqa7pq.png",
    tags: ["React", "Nodejs", "MongoDB", "TailwindCSS"],
    link: "https://unique-telecom.vercel.app/",
  },
]);

const selectedProject = ref(null);
const isModalOpen = ref(false);

const openModal = (project) => {
  selectedProject.value = project;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  setTimeout(() => {
    selectedProject.value = null;
  }, 300);
};

onMounted(() => {
  // Header animation
  gsap.from(".projects-header", {
    opacity: 0,
    y: -30,
    duration: 1,
    ease: "power3.out",
  });

  // Projects grid animation
  gsap.from(".project-card", {
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
  });
});
</script>

<template>
  <div class="relative min-h-screen py-20 bg-white dark:bg-gray-900">
    <AnimatedBackground />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="projects-header text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          My Projects
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A showcase of my latest work and ongoing projects.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="project-card group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
          @click="openModal(project)"
        >
          <!-- Project Image -->
          <div class="relative h-64 overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div
              class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"
            ></div>

            <!-- Hover Content -->
            <div
              class="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <h3 class="text-2xl font-bold text-white mb-2">
                {{ project.title }}
              </h3>
              <p class="text-white text-center px-6">Click to view details</p>
            </div>
          </div>

          <!-- Project Info -->
          <div class="p-6 bg-white dark:bg-gray-800">
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              {{ project.title }}
            </h3>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="(tag, tagIndex) in project.tags"
                :key="tagIndex"
                class="px-3 py-1 text-sm bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400 rounded-full"
              >
                {{ tag }}
              </span>
            </div>
            <p class="text-gray-600 dark:text-gray-300">
              {{ project.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Project Modal -->
      <div
        v-if="selectedProject"
        class="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0"
        :class="{ 'opacity-0': !isModalOpen }"
        @click.self="closeModal"
      >
        <div
          class="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        ></div>
        <div
          class="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-3xl w-full transform transition-all duration-300"
          :class="{
            'opacity-0 scale-95': !isModalOpen,
            'opacity-100 scale-100': isModalOpen,
          }"
        >
          <!-- Modal Content -->
          <div class="p-6">
            <button
              @click="closeModal"
              class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <img
              :src="selectedProject.image"
              :alt="selectedProject.title"
              class="w-full h-64 object-cover rounded-lg mb-6"
            />

            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {{ selectedProject.title }}
            </h3>

            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="(tag, tagIndex) in selectedProject.tags"
                :key="tagIndex"
                class="px-3 py-1 text-sm bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400 rounded-full"
              >
                {{ tag }}
              </span>
            </div>

            <p class="text-gray-600 dark:text-gray-300 mb-6">
              {{ selectedProject.description }}
            </p>

            <a
              :href="selectedProject.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10 cursor-pointer">
      <a class="text-primary-600 dark:text-primary-400 font-semibold hover:underline" href="https://github.com/radiant-O" target="_blank" rel="noopener noreferrer">View Github Projects >>></a>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  cursor: pointer;
}
</style>
