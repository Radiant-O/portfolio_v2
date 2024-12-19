<template>
  <div class="min-h-screen py-20 relative">
    <AnimatedBackground />
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Get in Touch
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          Let's connect and discuss how we can work together
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        <!-- Calendar Booking -->
        <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 xl:col-span-2">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Book a Discovery Call
          </h2>
          <div class="h-[600px] w-full">
            <div style="width:100%;height:100%;overflow:scroll" id="my-cal-inline"></div>
          </div>
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
                <div class="ml-4 min-w-0">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ info.title }}</h3>
                  <a :href="info.link" 
                     class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 block truncate">
                    {{ info.displayValue }}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Connect With Me
            </h2>
            <div class="grid grid-cols-2 gap-4">
              <a v-for="social in socialLinks" 
                 :key="social.title"
                 :href="social.link"
                 target="_blank"
                 rel="noopener noreferrer"
                 class="flex items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                <i :class="[social.icon, 'text-xl text-primary-600 dark:text-primary-400 mr-3']"></i>
                <span class="text-gray-900 dark:text-white">{{ social.title }}</span>
              </a>
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
    link: "https://github.com/radiant-O"
  },
  {
    icon: "fab fa-linkedin",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/abiodun-bukoye-202aab217/"
  },
  {
    icon: "fab fa-twitter",
    title: "Twitter",
    link: "https://twitter.com/olaniyi_bukoye"
  },
  {
    icon: "fas fa-newspaper",
    title: "Hashnode",
    link: "https://radiantcodes.hashnode.dev/"
  }
]);

onMounted(() => {
  // Initialize Cal.com
  const script = document.createElement('script');
  script.innerHTML = `
    (function (C, A, L) { 
      let p = function (a, ar) { a.q.push(ar); }; 
      let d = C.document; 
      C.Cal = C.Cal || function () { 
        let cal = C.Cal; 
        let ar = arguments; 
        if (!cal.loaded) { 
          cal.ns = {}; 
          cal.q = cal.q || []; 
          d.head.appendChild(d.createElement("script")).src = A; 
          cal.loaded = true; 
        } 
        if (ar[0] === L) { 
          const api = function () { p(api, arguments); }; 
          const namespace = ar[1]; 
          api.q = api.q || []; 
          if(typeof namespace === "string"){
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar); 
          return;
        } 
        p(cal, ar); 
      }; 
    })(window, "https://app.cal.com/embed/embed.js", "init");

    Cal("init", "30min", {origin:"https://cal.com"});

    Cal.ns["30min"]("inline", {
      elementOrSelector:"#my-cal-inline",
      config: {"layout":"month_view","theme":"auto"},
      calLink: "bukoye-olaniyi-towool/30min",
    });

    Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
  `;
  document.body.appendChild(script);

  // Animations
  gsap.from(".contact-info-item", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
  });

  gsap.from(".social-link", {
    opacity: 0,
    y: 20,
    duration: 0.6,
    stagger: {
      each: 0.1,
      from: "random"
    },
    ease: "power3.out",
    delay: 0.5
  });
});
</script>

<style scoped>
.contact-info-item {
  transition: transform 0.3s ease;
}

.contact-info-item:hover {
  transform: translateY(-2px);
}
</style>