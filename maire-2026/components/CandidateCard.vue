<template>
  <div class="card group cursor-pointer transform transition-transform duration-200 hover:scale-105">
    <!-- Photo -->
    <div class="mb-4 overflow-hidden rounded-lg">
      <img
        :src="candidate.photo"
        :alt="`Photo de ${candidate.firstName} ${candidate.lastName}`"
        class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        @error="handleImageError"
      />
    </div>

    <!-- Informations -->
    <div>
      <h3 class="text-xl font-bold text-gray-800 mb-2">
        {{ candidate.firstName }} {{ candidate.lastName }}
      </h3>
      
      <div class="space-y-2">
        <div class="flex items-start">
          <svg class="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p class="text-sm font-semibold text-gray-700">Poste</p>
            <p class="text-gray-600">{{ candidate.position }}</p>
          </div>
        </div>

        <div class="flex items-start">
          <svg class="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <div>
            <p class="text-sm font-semibold text-gray-700">Activité actuelle</p>
            <p class="text-gray-600">{{ candidate.currentJob }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Candidate } from '~/types/candidate'

interface Props {
  candidate: Candidate
}

defineProps<Props>()

// Gestion de l'erreur de chargement d'image (afficher un placeholder)
const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  // Image placeholder SVG avec initiales
  img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"%3E%3Crect fill="%230ea5e9" width="400" height="400"/%3E%3Ctext fill="%23ffffff" font-family="Arial" font-size="120" x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle"%3E?%3C/text%3E%3C/svg%3E'
}
</script>

