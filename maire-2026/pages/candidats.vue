<template>
  <div class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- En-tête -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">
          Notre Équipe
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Découvrez les femmes et les hommes qui portent notre projet pour 2026
        </p>
      </div>

      <!-- Grille de cartes candidats -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <CandidateCard
          v-for="candidate in candidates"
          :key="candidate.id"
          :candidate="candidate"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Candidate } from '~/types/candidate'

useHead({
  title: 'Notre Équipe - Maire 2026',
  meta: [
    {
      name: 'description',
      content: 'Découvrez notre équipe de candidats pour les élections municipales de 2026.',
    },
  ],
})

// Données mock des candidats (à remplacer par de vraies données)
const candidates: Candidate[] = [
  {
    id: 1,
    firstName: 'Marie',
    lastName: 'DUPONT',
    position: 'Tête de liste',
    currentJob: 'Directrice d\'école',
    photo: '/images/candidates/placeholder.jpg',
  },
  {
    id: 2,
    firstName: 'Jean',
    lastName: 'MARTIN',
    position: 'Adjoint aux finances',
    currentJob: 'Expert-comptable',
    photo: '/images/candidates/placeholder.jpg',
  },
  {
    id: 3,
    firstName: 'Sophie',
    lastName: 'BERNARD',
    position: 'Adjointe à l\'environnement',
    currentJob: 'Ingénieure environnement',
    photo: '/images/candidates/placeholder.jpg',
  },
  {
    id: 4,
    firstName: 'Pierre',
    lastName: 'DUBOIS',
    position: 'Adjoint à l\'urbanisme',
    currentJob: 'Architecte',
    photo: '/images/candidates/placeholder.jpg',
  },
  {
    id: 5,
    firstName: 'Laure',
    lastName: 'PETIT',
    position: 'Adjointe à la culture',
    currentJob: 'Professeure de musique',
    photo: '/images/candidates/placeholder.jpg',
  },
  {
    id: 6,
    firstName: 'Thomas',
    lastName: 'ROBERT',
    position: 'Adjoint aux sports',
    currentJob: 'Éducateur sportif',
    photo: '/images/candidates/placeholder.jpg',
  },
]
</script>

