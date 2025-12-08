<template>
  <div class="py-8 bg-gradient-to-b from-white to-gray-50 min-h-screen">
    <div class="container mx-auto px-4">
      <!-- Titre de la page -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-secondary-500 mb-6">
          Notre Programme
        </h1>

        <!-- Citation -->
        <div class="max-w-4xl mx-auto mb-8 bg-primary-50 border-l-4 border-primary-500 rounded-r-lg p-6 md:p-8">
          <blockquote class="text-secondary-600 text-base md:text-lg leading-relaxed mb-4 italic">
            « Je suis né parmi vous, je vis et je travaille parmi vous. Face aux manœuvres politiciennes ainsi qu'aux dérives budgétaires et fiscales, je me dois de vous proposer une alternance... 
            <br><br>
            Solide, déterminée, préparée, avec l'aide d'une équipe compétente, je veux vous aider à bâtir la commune que vous méritez ! »
          </blockquote>
          <cite class="block text-right text-secondary-500 font-bold not-italic">
            — Christian Allegret
          </cite>
        </div>

        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Découvrez nos 5 axes prioritaires en cliquant sur les thèmes ci-dessous
        </p>
      </div>

      <!-- Conteneur principal avec grille (version desktop) -->
      <div class="hidden md:grid md:grid-cols-3 md:gap-8 lg:gap-12 max-w-7xl mx-auto items-center">
        <!-- Colonne gauche -->
        <div class="space-y-8 flex flex-col items-center justify-center">
          <!-- Thème 1 - Soutien aux associations -->
          <div class="w-full">
            <button
              @click="toggleTheme(1)"
              class="w-full bg-white hover:bg-primary-50 border-2 border-gray-300 hover:border-primary-500 rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300 text-left"
            >
              <div class="flex items-center gap-3">
                <span class="text-3xl">{{ themes[0].icon }}</span>
                <h3 class="font-bold text-secondary-500 text-sm lg:text-base flex-1">{{ themes[0].title }}</h3>
                <svg 
                  class="w-5 h-5 text-gray-600 transition-transform duration-300"
                  :class="{ 'rotate-180': selectedTheme === 1 }"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            <transition name="dropdown">
              <div v-if="selectedTheme === 1" class="mt-2 bg-white border-2 border-primary-500 rounded-lg shadow-xl p-4">
                <p class="text-xs text-gray-600 mb-3 italic">{{ themes[0].description }}</p>
                <div class="space-y-2">
                  <div
                    v-for="(subtheme, idx) in themes[0].subthemes"
                    :key="idx"
                    @click="showDetails(1, idx, subtheme)"
                    class="p-2 bg-primary-50 hover:bg-primary-100 rounded border border-primary-200 cursor-pointer transition-all"
                  >
                    <div class="flex items-start gap-2">
                      <span class="text-lg">{{ getRelevantIcon(1, idx) }}</span>
                      <p class="text-xs text-secondary-600 flex-1">{{ subtheme.title }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>

          <!-- Thème 3 - Mieux vivre en Chartreuse -->
          <div class="w-full">
            <button
              @click="toggleTheme(3)"
              class="w-full bg-white hover:bg-primary-50 border-2 border-gray-300 hover:border-primary-500 rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300 text-left"
            >
              <div class="flex items-center gap-3">
                <span class="text-3xl">{{ themes[2].icon }}</span>
                <h3 class="font-bold text-secondary-500 text-sm lg:text-base flex-1">{{ themes[2].title }}</h3>
                <svg 
                  class="w-5 h-5 text-gray-600 transition-transform duration-300"
                  :class="{ 'rotate-180': selectedTheme === 3 }"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            <transition name="dropdown">
              <div v-if="selectedTheme === 3" class="mt-2 bg-white border-2 border-primary-500 rounded-lg shadow-xl p-4">
                <p class="text-xs text-gray-600 mb-3 italic">{{ themes[2].description }}</p>
                <div class="space-y-2">
                  <div
                    v-for="(subtheme, idx) in themes[2].subthemes"
                    :key="idx"
                    @click="showDetails(3, idx, subtheme)"
                    class="p-2 bg-primary-50 hover:bg-primary-100 rounded border border-primary-200 cursor-pointer transition-all"
                  >
                    <div class="flex items-start gap-2">
                      <span class="text-lg">{{ getRelevantIcon(3, idx) }}</span>
                      <p class="text-xs text-secondary-600 flex-1">{{ subtheme.title }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <!-- Colonne centrale - Image -->
        <div class="flex flex-col items-center gap-8">
          <!-- Image centrale -->
          <div class="flex justify-center items-center">
            <img 
              src="/images/logo.png" 
              alt="Logo" 
              class="w-64 h-64 lg:w-80 lg:h-80 object-contain"
            />
          </div>

          <!-- Thème 5 - Finances (en dessous de l'image) -->
          <div class="w-full">
            <button
              @click="toggleTheme(5)"
              class="w-full bg-white hover:bg-primary-50 border-2 border-gray-300 hover:border-primary-500 rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300 text-left"
            >
              <div class="flex items-center gap-3">
                <span class="text-3xl">{{ themes[4].icon }}</span>
                <h3 class="font-bold text-secondary-500 text-sm lg:text-base flex-1">{{ themes[4].title }}</h3>
                <svg 
                  class="w-5 h-5 text-gray-600 transition-transform duration-300"
                  :class="{ 'rotate-180': selectedTheme === 5 }"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            <transition name="dropdown">
              <div v-if="selectedTheme === 5" class="mt-2 bg-white border-2 border-primary-500 rounded-lg shadow-xl p-4">
                <p class="text-xs text-gray-600 mb-3 italic">{{ themes[4].description }}</p>
                <div class="space-y-2">
                  <div
                    v-for="(subtheme, idx) in themes[4].subthemes"
                    :key="idx"
                    @click="showDetails(5, idx, subtheme)"
                    class="p-2 bg-primary-50 hover:bg-primary-100 rounded border border-primary-200 cursor-pointer transition-all"
                  >
                    <div class="flex items-start gap-2">
                      <span class="text-lg">{{ getRelevantIcon(5, idx) }}</span>
                      <p class="text-xs text-secondary-600 flex-1">{{ subtheme.title }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <!-- Colonne droite -->
        <div class="space-y-8 flex flex-col items-center justify-center">
          <!-- Thème 2 - L'eau -->
          <div class="w-full">
            <button
              @click="toggleTheme(2)"
              class="w-full bg-white hover:bg-primary-50 border-2 border-gray-300 hover:border-primary-500 rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300 text-left"
            >
              <div class="flex items-center gap-3">
                <span class="text-3xl">{{ themes[1].icon }}</span>
                <h3 class="font-bold text-secondary-500 text-sm lg:text-base flex-1">{{ themes[1].title }}</h3>
                <svg 
                  class="w-5 h-5 text-gray-600 transition-transform duration-300"
                  :class="{ 'rotate-180': selectedTheme === 2 }"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            <transition name="dropdown">
              <div v-if="selectedTheme === 2" class="mt-2 bg-white border-2 border-primary-500 rounded-lg shadow-xl p-4">
                <p class="text-xs text-gray-600 mb-3 italic">{{ themes[1].description }}</p>
                <div class="space-y-2">
                  <div
                    v-for="(subtheme, idx) in themes[1].subthemes"
                    :key="idx"
                    @click="showDetails(2, idx, subtheme)"
                    class="p-2 bg-primary-50 hover:bg-primary-100 rounded border border-primary-200 cursor-pointer transition-all"
                  >
                    <div class="flex items-start gap-2">
                      <span class="text-lg">{{ getRelevantIcon(2, idx) }}</span>
                      <p class="text-xs text-secondary-600 flex-1">{{ subtheme.title }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>

          <!-- Thème 4 - Restaurer la déontologie -->
          <div class="w-full">
            <button
              @click="toggleTheme(4)"
              class="w-full bg-white hover:bg-primary-50 border-2 border-gray-300 hover:border-primary-500 rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300 text-left"
            >
              <div class="flex items-center gap-3">
                <span class="text-3xl">{{ themes[3].icon }}</span>
                <h3 class="font-bold text-secondary-500 text-sm lg:text-base flex-1">{{ themes[3].title }}</h3>
                <svg 
                  class="w-5 h-5 text-gray-600 transition-transform duration-300"
                  :class="{ 'rotate-180': selectedTheme === 4 }"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            <transition name="dropdown">
              <div v-if="selectedTheme === 4" class="mt-2 bg-white border-2 border-primary-500 rounded-lg shadow-xl p-4">
                <p class="text-xs text-gray-600 mb-3 italic">{{ themes[3].description }}</p>
                <div class="space-y-2">
                  <div
                    v-for="(subtheme, idx) in themes[3].subthemes"
                    :key="idx"
                    @click="showDetails(4, idx, subtheme)"
                    class="p-2 bg-primary-50 hover:bg-primary-100 rounded border border-primary-200 cursor-pointer transition-all"
                  >
                    <div class="flex items-start gap-2">
                      <span class="text-lg">{{ getRelevantIcon(4, idx) }}</span>
                      <p class="text-xs text-secondary-600 flex-1">{{ subtheme.title }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>

      <!-- Version mobile - Liste verticale -->
      <div class="md:hidden space-y-4">
        <!-- Image en premier sur mobile -->
        <div class="flex justify-center items-center mb-6">
          <img 
            src="/images/logo.png" 
            alt="Logo" 
            class="w-64 h-64 object-contain"
          />
        </div>

        <!-- Thèmes -->
        <div v-for="theme in themes" :key="theme.id" class="w-full">
          <button
            @click="toggleTheme(theme.id)"
            class="w-full bg-white hover:bg-primary-50 border-2 border-gray-300 hover:border-primary-500 rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300 text-left"
          >
            <div class="flex items-center gap-3">
              <span class="text-3xl">{{ theme.icon }}</span>
              <h3 class="font-bold text-secondary-500 flex-1">{{ theme.title }}</h3>
              <svg 
                class="w-6 h-6 text-gray-600 transition-transform duration-300"
                :class="{ 'rotate-180': selectedTheme === theme.id }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          <transition name="dropdown">
            <div v-if="selectedTheme === theme.id" class="mt-2 bg-white border-2 border-primary-500 rounded-lg shadow-xl p-4">
              <p class="text-sm text-gray-600 mb-3 italic">{{ theme.description }}</p>
              <div class="space-y-2">
                <div
                  v-for="(subtheme, idx) in theme.subthemes"
                  :key="idx"
                  @click="showDetails(theme.id, idx, subtheme)"
                  class="p-3 bg-primary-50 hover:bg-primary-100 rounded border border-primary-200 cursor-pointer transition-all"
                >
                  <div class="flex items-start gap-2">
                    <span class="text-xl">{{ getRelevantIcon(theme.id, idx) }}</span>
                    <p class="text-sm text-secondary-600 flex-1">{{ subtheme.title }}</p>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>

    <!-- Modale de détails -->
    <transition name="fade">
      <div
        v-if="tooltipData"
        class="tooltip-modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4"
        @click="tooltipData = null"
      >
        <div
          class="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 transform transition-all"
          @click.stop
        >
          <div class="flex items-start justify-between mb-4">
            <h3 class="text-lg font-bold text-secondary-500 flex-1 pr-4">
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
          
          <div class="text-secondary-600 leading-relaxed">
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
import { ref } from 'vue'

useHead({
  title: 'Notre Programme - Unis pour les laurentinois',
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

// Fonction pour obtenir une icône pertinente selon le thème et l'index
const getRelevantIcon = (themeId, subIndex) => {
  const iconMapping = {
    1: ['💶', '🔍'], // Soutien aux associations : argent, recherche
    2: ['💧'], // L'eau : goutte d'eau
    3: ['🛣️', '📹'], // Mieux vivre : route, caméra
    4: ['📋', '📉', '🚫', '👥'], // Déontologie : engagements, baisse, stop, participation
    5: ['🔒', '🏛️', '📊'], // Finances : stabilité, patrimoine, diversité
  }
  
  const icons = iconMapping[themeId] || ['✅']
  return icons[subIndex % icons.length]
}

// Fonction pour toggle un thème (ouvrir/fermer)
const toggleTheme = (themeId) => {
  if (selectedTheme.value === themeId) {
    selectedTheme.value = null
  } else {
    selectedTheme.value = themeId
  }
}

// Fonction pour afficher les détails d'un sous-thème
const showDetails = (themeId, subIndex, subtheme) => {
  tooltipData.value = {
    themeId,
    subthemeIndex: subIndex,
    title: subtheme.title,
    text: subtheme.details
  }
}
</script>

<style scoped>
/* Transition pour les menus déroulants */
.dropdown-enter-active {
  animation: dropdown-open 0.3s ease-out;
}

.dropdown-leave-active {
  animation: dropdown-close 0.2s ease-in;
}

@keyframes dropdown-open {
  from {
    opacity: 0;
    transform: translateY(-10px);
    max-height: 0;
  }
  to {
    opacity: 1;
    transform: translateY(0);
    max-height: 500px;
  }
}

@keyframes dropdown-close {
  from {
    opacity: 1;
    transform: translateY(0);
    max-height: 500px;
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
    max-height: 0;
  }
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

/* Scrollbar personnalisée */
.scrollbar-thin {
  scrollbar-width: thin;
  scrollbar-color: #9ca3af #f3f4f6;
}

.scrollbar-thin::-webkit-scrollbar {
  width: 8px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background: #f3f4f6;
  border-radius: 10px;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 10px;
  border: 2px solid #f3f4f6;
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}
</style>

