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
        
        <!-- Carte "À venir" avec effet de fondu -->
        <div class="card coming-soon-card relative overflow-hidden">
          <div class="h-full flex items-center justify-center p-8">
            <div class="text-center z-10 relative">
              <div class="mb-4">
                <svg class="w-20 h-20 text-primary-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p class="text-xl font-bold text-secondary-500 mb-2">
                La suite de l'équipe
              </p>
              <p class="text-gray-600">
                sera bientôt disponible...
              </p>
            </div>
          </div>
        </div>
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
  {
    id: 2,
    firstName: 'Yvette',
    lastName: 'RIMET',
    currentJob: 'Responsable Opérationnel centre courrier',
    photo: '/images/candidates/placeholder.jpg',
    citation: 'Coucou'
  },
  {
    id: 3,
    firstName: 'Cédric',
    lastName: 'MOREL',
    currentJob: 'Chef d\'entreprise',
    photo: '/images/candidates/placeholder.jpg',
    citation: 'Coucou'
  },
  {
    id: 4,
    firstName: 'Aline',
    lastName: 'GRATREAUX',
    currentJob: 'Professeure d\'anglais',
    photo: '/images/candidates/placeholder.jpg',
    citation: 'Coucou'
  },
  {
    id: 5,
    firstName: 'Gérard',
    lastName: 'GAVIOT',
    currentJob: 'Retraité, Officier marinier',
    photo: '/images/candidates/placeholder.jpg',
    citation: 'Coucou'
  },
  // {
  //   id: 6,
  //   firstName: 'TBD',
  //   lastName: 'TBD',
  //   currentJob: 'Retraité, Officier marinier',
  //   photo: '/images/candidates/placeholder.jpg',
  //   citation: 'Coucou'
  // },
  {
    id: 7,
    firstName: 'Pascal',
    lastName: 'GOULLET',
    currentJob: 'Ingénieur de l\'industrie',
    photo: '/images/candidates/placeholder.jpg',
    citation: 'Coucou'
  },
  // {
  //   id: 8,
  //   firstName: 'TBD',
  //   lastName: 'TBD',
  //   currentJob: 'Ingénieur de l\'industrie',
  //   photo: '/images/candidates/placeholder.jpg',
  //   citation: 'Coucou'
  // },
  {
    id: 9,
    firstName: 'Michaël',
    lastName: 'MARÉ',
    currentJob: 'Ingénieur logiciel',
    photo: '/images/candidates/placeholder.jpg',
    citation: 'Coucou'
  },
  {
    id: 10,
    firstName: 'Gwendoline',
    lastName: 'BOTTIN',
    currentJob: 'Assistante maternelle',
    photo: '/images/candidates/placeholder.jpg',
    citation: 'Coucou'
  },
  {
    id: 11,
    firstName: 'Gilles',
    lastName: 'BONAVENTURA',
    currentJob: 'Cadre territorial de la sécurité et Directeur de la police municipale d\'Echirolles',
    photo: '/images/candidates/placeholder.jpg',
    citation: 'Coucou'
  },
  // {
  //   id: 12,
  //   firstName: 'TBD',
  //   lastName: 'TBD',
  //   currentJob: 'Infirmière',
  //   photo: '/images/candidates/placeholder.jpg',
  //   citation: 'Coucou'
  // },
  {
    id: 13,
    firstName: 'Romain',
    lastName: 'GALIFFET',
    currentJob: 'Ingénieur en espaces verts',
    photo: '/images/candidates/placeholder.jpg',
    citation: 'Coucou'
  },
  {
    id: 14,
    firstName: 'Audrey',
    lastName: 'COMBE MIMOUNAN',
    currentJob: 'Vendeuse en boulangerie',
    photo: '/images/candidates/placeholder.jpg',
    citation: 'Coucou'
  },
  {
    id: 15,
    firstName: 'Stephane',
    lastName: 'REGAZZONI',
    currentJob: 'Vice président association Berbenno',
    photo: '/images/candidates/placeholder.jpg',
    citation: 'Coucou'
  },
  {
    id: 16,
    firstName: 'Mélanie',
    lastName: 'DI PAOLA',
    currentJob: 'Thanadoula - Aide Soignante',
    photo: '/images/candidates/placeholder.jpg',
    citation: 'Coucou'
  },
  // {
  //   id: 17,
  //   firstName: 'TBD',
  //   lastName: 'TBD',
  //   currentJob: 'Thanadoula - Aide Soignante',
  //   photo: '/images/candidates/placeholder.jpg',
  //   citation: 'Coucou'
  // },
  {
    id: 18,
    firstName: 'Lydia',
    lastName: 'FRAGIACOMO',
    currentJob: 'Infirmière',
    photo: '/images/candidates/placeholder.jpg',
    citation: 'Coucou'
  },
  // {
  //   id: 19,
  //   firstName: 'Mélanie',
  //   lastName: 'TBD',
  //   currentJob: 'Thanadoula - Aide Soignante',
  //   photo: '/images/candidates/placeholder.jpg',
  //   citation: 'Coucou'
  // },
  // {
  //   id: 20,
  //   firstName: 'TBD',
  //   lastName: 'TBD',
  //   currentJob: 'Thanadoula - Aide Soignante',
  //   photo: '/images/candidates/placeholder.jpg',
  //   citation: 'Coucou'
  // },
]
</script>

<style scoped>
.coming-soon-card {
  background: linear-gradient(to right, 
    #fef3f2 0%,
    #fee5df 30%,
    rgba(254, 229, 223, 0.5) 70%,
    rgba(255, 255, 255, 0.3) 90%,
    rgba(255, 255, 255, 0) 100%
  );
  border: 2px dashed #d1d5db;
  min-height: 400px;
  position: relative;
}

.coming-soon-card:hover {
  border-color: #C06736;
  background: linear-gradient(to right, 
    #f9fafb 0%,
    #f3f4f6 30%,
    rgba(243, 244, 246, 0.5) 70%,
    rgba(255, 255, 255, 0.3) 90%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>

