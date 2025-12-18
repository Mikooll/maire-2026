<template>
  <div class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- En-tête -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-secondary-500 mb-4">
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
  title: 'Notre Équipe - Unis pour les laurentinois',
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
    firstName: 'Christian',
    lastName: 'ALLEGRET',
    currentJob: 'Artisan Commerçant',
    photo: '/images/candidates/christian-allegret.jpg',
    citation: 'Coucou'
  },
  // {
  //   id: 2,
  //   firstName: 'Yvette',
  //   lastName: 'RIMET',
  //   currentJob: 'Responsable Poste locale',
  //   photo: '/images/candidates/placeholder.jpg',
  //   citation: 'Coucou'
  // },
  // {
  //   id: 3,
  //   firstName: 'Cédric',
  //   lastName: 'MOREL',
  //   currentJob: 'Chef d\'entreprise',
  //   photo: '/images/candidates/placeholder.jpg',
  //   citation: 'Coucou'
  // },
  // {
  //   id: 4,
  //   firstName: 'Aline',
  //   lastName: 'GRATREAUX',
  //   currentJob: 'Professeure d\'anglais',
  //   photo: '/images/candidates/placeholder.jpg',
  //   citation: 'Coucou'
  // },
  // {
  //   id: 5,
  //   firstName: 'Gérard',
  //   lastName: 'GAVIOT',
  //   currentJob: 'Retraité, Officier marinier',
  //   photo: '/images/candidates/placeholder.jpg',
  //   citation: 'Coucou'
  // },
  // // {
  // //   id: 6,
  // //   firstName: 'Gérard',
  // //   lastName: 'GAVIOT',
  // //   currentJob: 'Retraité, Officier marinier',
  // //   photo: '/images/candidates/placeholder.jpg',
  // //   citation: 'Coucou'
  // // },
  // {
  //   id: 7,
  //   firstName: 'Pascal',
  //   lastName: 'GOULLET',
  //   currentJob: 'Ingénieur de l\'industrie',
  //   photo: '/images/candidates/placeholder.jpg',
  //   citation: 'Coucou'
  // },
  // // {
  // //   id: 8,
  // //   firstName: 'Bruno',
  // //   lastName: 'GAUTHIER',
  // //   currentJob: 'Ingénieur de l\'industrie',
  // //   photo: '/images/candidates/placeholder.jpg',
  // //   citation: 'Coucou'
  // // },
  // {
  //   id: 9,
  //   firstName: 'Michaël',
  //   lastName: 'MARÉ',
  //   currentJob: 'Ingénieur logiciel',
  //   photo: '/images/candidates/placeholder.jpg',
  //   citation: 'Coucou'
  // },
  // {
  //   id: 10,
  //   firstName: 'Gwendoline',
  //   lastName: 'BOTTIN',
  //   currentJob: 'Assistante maternelle',
  //   photo: '/images/candidates/placeholder.jpg',
  //   citation: 'Coucou'
  // },
  // {
  //   id: 11,
  //   firstName: 'Gilles',
  //   lastName: 'BONAVENTURA',
  //   currentJob: 'Cadre territorial de la sécurité et Directeur de la police municipale d\'Echirolles',
  //   photo: '/images/candidates/placeholder.jpg',
  //   citation: 'Coucou'
  // },
  // {
  //   id: 12,
  //   firstName: 'Lydia',
  //   lastName: 'FRAGIACOMO',
  //   currentJob: 'Infirmière',
  //   photo: '/images/candidates/placeholder.jpg',
  //   citation: 'Coucou'
  // },
  // {
  //   id: 13,
  //   firstName: 'Romain',
  //   lastName: 'GALIFFET',
  //   currentJob: 'Ingénieur en espaces verts',
  //   photo: '/images/candidates/placeholder.jpg',
  //   citation: 'Coucou'
  // },
  // {
  //   id: 14,
  //   firstName: 'Audrey',
  //   lastName: 'COMBE MIMOUNAN',
  //   currentJob: 'Vendeuse en boulangerie',
  //   photo: '/images/candidates/placeholder.jpg',
  //   citation: 'Coucou'
  // },
  // {
  //   id: 15,
  //   firstName: 'Stephane',
  //   lastName: 'REGAZZONI',
  //   currentJob: 'Vice président association Berbenno',
  //   photo: '/images/candidates/placeholder.jpg',
  //   citation: 'Coucou'
  // },
  // {
  //   id: 16,
  //   firstName: 'Mélanie',
  //   lastName: 'DI PAOLA',
  //   currentJob: 'Thanadoula - Aide Soignante',
  //   photo: '/images/candidates/placeholder.jpg',
  //   citation: 'Coucou'
  // },
]
</script>

