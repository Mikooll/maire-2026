<template>
  <header class="bg-white shadow-md sticky top-0 z-100" style="z-index: 100;">
    <div class="container mx-auto px-4">
      <nav class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2">
          <div class="text-2xl font-bold text-primary-600">
            Maire 2026
          </div>
        </NuxtLink>

        <!-- Navigation Desktop -->
        <div class="hidden md:flex space-x-8">
          <NuxtLink
            to="/"
            class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            :class="{ 'text-primary-600': $route.path === '/' }"
          >
            Accueil
          </NuxtLink>
          <NuxtLink
            to="/candidats"
            class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            :class="{ 'text-primary-600': $route.path === '/candidats' }"
          >
            Candidats
          </NuxtLink>
          <NuxtLink
            to="/programme"
            class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            :class="{ 'text-primary-600': $route.path === '/programme' }"
          >
            Programme
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            :class="{ 'text-primary-600': $route.path === '/contact' }"
          >
            Contact
          </NuxtLink>
        </div>

        <!-- Bouton Menu Mobile -->
        <button
          @click="toggleMenu"
          class="md:hidden text-gray-700 hover:text-primary-600 focus:outline-none"
          aria-label="Menu"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!isMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </nav>

      <!-- Navigation Mobile -->
      <div
        v-if="isMenuOpen"
        class="md:hidden py-4 border-t border-gray-200"
      >
        <NuxtLink
          to="/"
          class="block py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
          :class="{ 'text-primary-600': $route.path === '/' }"
          @click="closeMenu"
        >
          Accueil
        </NuxtLink>
        <NuxtLink
          to="/candidats"
          class="block py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
          :class="{ 'text-primary-600': $route.path === '/candidats' }"
          @click="closeMenu"
        >
          Candidats
        </NuxtLink>
        <NuxtLink
          to="/programme"
          class="block py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
          :class="{ 'text-primary-600': $route.path === '/programme' }"
          @click="closeMenu"
        >
          Programme
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="block py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
          :class="{ 'text-primary-600': $route.path === '/contact' }"
          @click="closeMenu"
        >
          Contact
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

