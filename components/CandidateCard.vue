<template>
  <div class="card group transform transition-transform duration-200 hover:scale-105">
    <!-- Photo -->
    <div class="mb-4 overflow-hidden rounded-lg bg-gray-200 relative">
      <!-- Placeholder avec initiales -->
      <div 
        v-if="!imageLoaded || imageError"
        class="w-full h-64 bg-primary-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
      >
        <span class="text-white text-6xl font-bold">
          {{ getInitials(candidate.firstName, candidate.lastName) }}
        </span>
      </div>
      
      <!-- Image réelle -->
      <img
        v-show="imageLoaded && !imageError"
        :src="candidate.photo"
        :alt="`Photo de ${candidate.firstName} ${candidate.lastName}`"
        class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        @load="onImageLoad"
        @error="onImageError"
      >
    </div>

    <!-- Informations -->
    <div>
      <h3 class="text-xl font-bold text-secondary-500 mb-2">
        {{ candidate.firstName }} {{ candidate.lastName }}
      </h3>
      
      <div class="space-y-2">
        <div class="flex items-start">
          <svg class="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p class="text-sm font-semibold text-secondary-600">Activité actuelle</p>
            <p class="text-gray-600">{{ candidate.currentJob }}</p>
          </div>
        </div>

        <!-- <div class="flex items-start">
          <svg class="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <div class="flex-1">
            <p class="text-sm font-semibold text-secondary-600 mb-1">Citation</p>
            <p class="text-gray-600 italic">"{{ candidate.citation }}"</p>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Candidate } from '~/types/candidate'

interface Props {
  candidate: Candidate
}

defineProps<Props>()

// États pour gérer le chargement de l'image
const imageLoaded = ref(false)
const imageError = ref(false)

// Fonction pour obtenir les initiales
const getInitials = (firstName: string, lastName: string): string => {
  const firstInitial = firstName?.charAt(0)?.toUpperCase() || ''
  const lastInitial = lastName?.charAt(0)?.toUpperCase() || ''
  return `${firstInitial}${lastInitial}`
}

// Gestion du chargement réussi de l'image
const onImageLoad = () => {
  imageLoaded.value = true
  imageError.value = false
}

// Gestion de l'erreur de chargement d'image
const onImageError = () => {
  imageLoaded.value = false
  imageError.value = true
}
</script>

