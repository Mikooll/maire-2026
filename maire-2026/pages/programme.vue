<template>
  <div class="py-8 bg-gradient-to-b from-white to-gray-50">
    <div class="container mx-auto px-4">
      <!-- Backdrop pour fermer au clic extérieur -->
      <transition name="fade">
        <div
          v-if="selectedTheme"
          class="fixed inset-0 z-40"
          @click="selectedTheme = null"
        ></div>
      </transition>

      <!-- Arbre interactif -->
      <div class="relative max-w-6xl mx-auto" style="min-height: 450px; position: relative;">
        <!-- L'arbre image au centre -->
        <div class="absolute top-24 left-1/2 transform -translate-x-1/2 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 z-0 flex items-center justify-center">
          <img src="/images/tree.png" alt="Arbre" class="w-full h-full object-contain" />
        </div>

        <!-- Les 5 thèmes positionnés autour de l'arbre -->
        <div
          v-for="(theme, index) in themes"
          :key="theme.id"
          :class="[
            'absolute',
            selectedTheme === theme.id ? 'z-50' : 'z-10'
          ]"
          :style="getThemePosition(index)"
        >
          <!-- Cercle du thème -->
          <div 
            class="cursor-pointer transition-all duration-300 hover:scale-110"
            @click="toggleTheme(theme.id)"
          >
            <div 
              :class="[
                'bg-white rounded-full shadow-lg flex flex-col items-center justify-center border-4',
                'w-20 h-20 p-3 md:w-24 md:h-24 md:p-4 lg:w-28 lg:h-28 lg:p-5',
                selectedTheme === theme.id ? 'border-primary-500 scale-110' : 'border-primary-200 hover:border-primary-400'
              ]"
            >
              <div class="text-2xl md:text-3xl mb-1">{{ theme.icon }}</div>
              <div class="text-[10px] md:text-xs font-semibold text-center text-gray-700 leading-tight">
                {{ theme.title }}
              </div>
            </div>
          </div>

          <!-- Fruits qui apparaissent sous le thème -->
          <transition name="fruits">
            <div 
              v-if="selectedTheme === theme.id" 
              :class="[
                'absolute top-full mt-4 w-64 md:w-72 lg:w-80',
                index === 0 ? 'left-1/2 -translate-x-1/2' : (index === 2 || index === 4 ? 'right-0' : 'left-0')
              ]"
              style="z-index: 100;"
            >
              <div 
                class="bg-white rounded-xl shadow-2xl p-4 border-2 border-primary-200"
                @click.stop
              >
                <!-- Titre du thème -->
                <h4 class="text-sm font-bold text-gray-800 mb-3 text-center">{{ theme.title }}</h4>
                
                <!-- Liste des fruits -->
                <div class="space-y-2">
                  <div
                    v-for="(subtheme, subIndex) in theme.subthemes"
                    :key="subIndex"
                    class="flex items-center gap-3 p-2 bg-gradient-to-r from-primary-50 to-white rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                    @click="tooltipData = { themeId: theme.id, subthemeIndex: subIndex, title: subtheme.title, text: subtheme.details }"
                  >
                    <!-- Pomme émoji -->
                    <div class="text-3xl flex-shrink-0">
                      🍎
                    </div>
                    
                    <!-- Texte du sous-thème -->
                    <div class="flex-1">
                      <p class="text-xs text-gray-700 leading-tight">{{ subtheme.title }}</p>
                    </div>
                    
                    <!-- Icône info -->
                    <div class="text-primary-500 flex-shrink-0">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- Bouton fermer -->
                <button
                  @click="selectedTheme = null"
                  class="mt-3 w-full px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors text-xs font-medium"
                >
                  Fermer
                </button>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>

    <!-- Modale d'infobulle -->
    <transition name="fade">
      <div
        v-if="tooltipData"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4"
        @click="tooltipData = null"
      >
        <div
          class="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 transform transition-all"
          @click.stop
        >
          <div class="flex items-start justify-between mb-4">
            <h3 class="text-lg font-bold text-gray-800 flex-1 pr-4">
              {{ tooltipData.title }}
            </h3>
            <button
              @click="tooltipData = null"
              class="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div class="text-gray-700 leading-relaxed">
            {{ tooltipData.text }}
          </div>
          
          <button
            @click="tooltipData = null"
            class="mt-6 w-full px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors font-medium"
          >
            Fermer
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

useHead({
  title: 'Notre Programme - Maire 2026',
  meta: [
    {
      name: 'description',
      content: 'Découvrez notre programme détaillé pour les élections municipales de 2026.',
    },
  ],
})

// État pour gérer le thème sélectionné
const selectedTheme = ref<number | null>(null)

// État pour gérer l'infobulle
const tooltipData = ref<{ themeId: number, subthemeIndex: number, title: string, text: string } | null>(null)

// État pour la taille d'écran
const windowWidth = ref(0)

// Fonction pour mettre à jour la largeur de l'écran
const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

// Lifecycle hooks
onMounted(() => {
  updateWindowWidth()
  window.addEventListener('resize', updateWindowWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth)
})

// Données des thèmes avec détails pour chaque sous-thème
const themes = [
  {
    id: 1,
    icon: '🤝',
    title: 'Soutien aux associations',
    description: 'Les associations sont le cœur battant de notre commune. Nous nous engageons à les soutenir activement.',
    subthemes: [
      {
        title: 'Sécurisation de l\'aide communale (par la baisse des indémnités des élus)',
        details: 'Nous nous engageons à réduire les indemnités des élus pour redistribuer ces ressources aux associations locales, garantissant ainsi un soutien financier pérenne et accru.'
      },
      {
        title: 'Recherche active de financement extérieur',
        details: 'Mise en place d\'une cellule dédiée à la recherche de subventions régionales, départementales et européennes pour maximiser les ressources disponibles pour les associations.'
      },
    ],
  },
  {
    id: 2,
    icon: '💧',
    title: 'L\'eau',
    description: 'La gestion de l\'eau est un enjeu majeur. Nous garantirons une eau de qualité pour tous.',
    subthemes: [
      {
        title: 'Garder la compétence et la tarification correcte',
        details: 'Nous maintiendrons la gestion locale de l\'eau pour garantir une tarification juste et transparente, adaptée aux besoins de nos habitants, tout en assurant la qualité du service.'
      },
    ],
  },
  {
    id: 3,
    icon: '🏔️',
    title: 'Mieux vivre en Chartreuse',
    description: 'Améliorer le cadre de vie de tous les habitants dans le respect de notre environnement.',
    subthemes: [
      {
        title: 'Améliorer le suivi du réseau routier',
        details: 'Mise en place d\'un plan pluriannuel d\'entretien et de rénovation des routes communales avec un suivi rigoureux et des interventions rapides sur les zones prioritaires.'
      },
      {
        title: 'Mise en place raisonnée de la vidéo protections.',
        details: 'Installation de caméras de vidéoprotection aux points stratégiques, dans le respect de la vie privée et après concertation citoyenne, pour renforcer la sécurité des habitants.'
      },
    ],
  },
  {
    id: 4,
    icon: '⚖️',
    title: 'Restaurer la déontologie',
    description: 'Une gouvernance transparente et éthique au service de l\'intérêt général.',
    subthemes: [
      {
        title: 'Respecter les engagements donnés',
        details: 'Publication systématique d\'un bilan annuel des promesses électorales avec un suivi transparent de leur réalisation et des explications en cas de non-réalisation.'
      },
      {
        title: 'Baisse des indémnités',
        details: 'Réduction volontaire des indemnités des élus municipaux pour montrer l\'exemple et réaffecter ces sommes au service public et aux projets communaux.'
      },
      {
        title: 'Mettre fin aux manoeuvres politiciennes',
        details: 'Adoption d\'une charte éthique pour les élus, interdisant les conflits d\'intérêts et garantissant l\'impartialité dans toutes les décisions municipales.'
      },
      {
        title: 'Associer la population aux grandes orientations du mandat',
        details: 'Organisation de conseils participatifs citoyens et de consultations publiques pour toutes les décisions majeures, avec publication des résultats et prise en compte des avis.'
      },
    ],
  },
  {
    id: 5,
    icon: '💰',
    title: 'Finances',
    description: 'Une gestion rigoureuse et responsable des finances communales.',
    subthemes: [
      {
        title: 'Stabilisation des impôts.',
        details: 'Engagement ferme de ne pas augmenter les taux d\'imposition locaux pendant tout le mandat, tout en maintenant la qualité des services publics.'
      },
      {
        title: 'Mieux gérer notre patrimoine',
        details: 'Optimisation de la gestion des bâtiments communaux, rénovation énergétique et valorisation des espaces inutilisés pour générer des économies et de nouvelles recettes.'
      },
      {
        title: 'Diversifier nos recettes.',
        details: 'Recherche active de nouvelles sources de financement (subventions, partenariats public-privé, mutualisation avec d\'autres communes) pour réduire la dépendance aux impôts locaux.'
      },
    ],
  },
]

// Fonction pour obtenir la position de chaque thème autour de l'arbre (responsive)
const getThemePosition = (index) => {
  const width = windowWidth.value
  
  // Mobile (< 768px)
  if (width < 768) {
    const positionsMobile = [
      { top: '3.25rem', left: '50%', transform: 'translateX(-50%)' },    // 1. Haut centre (Associations)
      { top: '8.75rem', left: '0.75rem' },                                // 2. Haut gauche (Eau)
      { top: '8.75rem', right: '0.75rem' },                               // 3. Haut droite (Chartreuse)
      { top: '15.75rem', left: '1.75rem' },                                // 4. Bas gauche (Déontologie)
      { top: '15.75rem', right: '1.75rem' },                               // 5. Bas droite (Finances)
    ]
    return positionsMobile[index] || {}
  }
  
  // Tablette (768px - 1024px)
  if (width < 1024) {
    const positionsTablet = [
      { top: '2.25rem', left: '50%', transform: 'translateX(-50%)' },   // 1. Haut centre (Associations)
      { top: '6.25rem', left: '130px' },                                // 2. Haut gauche (Eau)
      { top: '6.25rem', right: '130px' },                               // 3. Haut droite (Chartreuse)
      { top: '13.75rem', left: '100px' },                               // 4. Bas gauche (Déontologie)
      { top: '13.75rem', right: '100px' },                              // 5. Bas droite (Finances)
    ]
    return positionsTablet[index] || {}
  }
  
  // Desktop (>= 1024px)
  const positionsDesktop = [
    { top: '2.25rem', left: '50%', transform: 'translateX(-50%)' },     // 1. Haut centre (Associations)
    { top: '6.25rem', left: '20.25rem' },                                 // 2. Haut gauche (Eau)
    { top: '6.25rem', right: '20.25rem' },                                // 3. Haut droite (Chartreuse)
    { top: '13.75rem', left: '18.75rem' },                                 // 4. Bas gauche (Déontologie)
    { top: '13.75rem', right: '18.75rem' },                                // 5. Bas droite (Finances)
  ]
  return positionsDesktop[index] || {}
}

// Fonction pour toggle un thème (ouvrir/fermer)
const toggleTheme = (themeId) => {
  if (selectedTheme.value === themeId) {
    selectedTheme.value = null
  } else {
    selectedTheme.value = themeId
  }
}
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.4s ease-out;
}

/* Transition pour les fruits */
.fruits-enter-active {
  transition: all 0.3s ease-out;
}

.fruits-leave-active {
  transition: all 0.2s ease-in;
}

.fruits-enter-from,
.fruits-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Transition pour la modale */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

