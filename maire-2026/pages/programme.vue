<template>
  <div class="py-8 bg-gradient-to-b from-white to-gray-50">
    <div class="container mx-auto px-4">
      <!-- Titre de la page -->
      <div class="text-center mb-8">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Notre Programme
        </h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Découvrez nos 5 axes prioritaires en cliquant sur les cercles ci-dessous
        </p>
      </div>

      <!-- Backdrop pour fermer au clic extérieur -->
      <transition name="fade">
        <div
          v-if="selectedTheme"
          class="fixed inset-0 z-40"
          @click="selectedTheme = null"
        ></div>
      </transition>

      <!-- Cordée interactive -->
      <div class="relative max-w-7xl mx-auto">
        <!-- Bulle de BD qui apparaît au-dessus du thème -->
        <transition name="bubble">
          <div 
            v-if="selectedTheme !== null" 
            class="absolute top-0 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-xl"
          >
            <div 
              class="bg-white rounded-2xl shadow-2xl p-4 md:p-5 border-3 border-gray-800 relative"
              @click.stop
            >
              
              <!-- Bouton fermer en style BD -->
              <button
                @click="selectedTheme = null"
                class="absolute -top-2 -right-2 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg border-3 border-gray-800 transition-all duration-200 hover:scale-110 shadow-lg z-10"
                aria-label="Fermer"
              >
                ×
              </button>
              <!-- Titre du thème avec icône -->
              <div class="flex items-center justify-center gap-2 mb-3 pb-2 border-b-2 border-primary-100">
                <span class="text-2xl">{{ getCurrentTheme()?.icon }}</span>
                <h4 class="text-base md:text-lg font-bold text-gray-800">{{ getCurrentTheme()?.title }}</h4>
              </div>
              
              <!-- Sous-titre descriptif -->
              <p class="text-center text-gray-600 text-xs md:text-sm mb-3 italic">
                {{ getCurrentTheme()?.description }}
              </p>
                
              <!-- Liste des fruits -->
              <div class="overflow-hidden rounded-lg">
                <div class="grid grid-cols-1 gap-2 max-h-[50vh] overflow-y-auto px-3 py-2.5 scrollbar-thin scrollbar-thumb-primary-300 scrollbar-track-gray-100" style="padding-bottom: 2rem;">
                <div
                  v-for="(subtheme, subIndex) in getCurrentTheme()?.subthemes"
                  :key="subIndex"
                  class="group relative flex items-start gap-2 p-2.5 bg-gradient-to-br from-white via-primary-50/30 to-white rounded-lg border-2 border-gray-700 hover:border-primary-500 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5"
                  @click="tooltipData = { themeId: selectedTheme, subthemeIndex: subIndex, title: subtheme.title, text: subtheme.details }"
                >
                  <!-- Icône pertinente -->
                  <div class="text-2xl flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                    {{ getRelevantIcon(selectedTheme, subIndex) }}
                  </div>
                  
                  <!-- Texte du sous-thème -->
                  <div class="flex-1 min-w-0">
                    <p class="text-xs md:text-sm text-gray-800 leading-tight font-medium group-hover:text-primary-700 transition-colors">
                      {{ subtheme.title }}
                    </p>
                  </div>
                  
                  <!-- Icône info avec badge "Détails" -->
                  <div class="flex flex-col items-center gap-0.5 flex-shrink-0">
                    <div class="text-primary-500 group-hover:text-primary-600 transition-colors">
                      <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span class="text-[10px] text-primary-600 font-medium">
                      Plus d'info
                    </span>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </transition>

        <!-- Le logo au centre - cliquable directement -->
        <div 
          class=" h-80 md:w-[500px] md:h-[500px] lg:w-[800px] lg:h-[800px] mx-auto"
          @click="handleSvgClick"
          v-html="svgContent"
        ></div>
      </div>
    </div>

    <!-- Modale d'infobulle -->
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

// État pour le contenu SVG
const svgContent = ref('')

// Charger le SVG au montage du composant
onMounted(async () => {
  try {
    const response = await fetch('/images/logo.svg')
    svgContent.value = await response.text()
  } catch (error) {
    console.error('Erreur lors du chargement du SVG:', error)
  }
  
  updateWindowWidth()
  window.addEventListener('resize', updateWindowWidth)
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

// Fonction pour obtenir le thème actuellement sélectionné
const getCurrentTheme = () => {
  if (selectedTheme.value === null) return null
  return themes.find(theme => theme.id === selectedTheme.value)
}

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

// Fonction pour gérer les clics sur le SVG
const handleSvgClick = (event) => {
  // Trouver l'élément cliqué qui a la classe 'theme-clickable'
  const target = event.target.closest('.theme-clickable')
  
  if (target) {
    const themeId = parseInt(target.getAttribute('data-theme-id'))
    toggleTheme(themeId)
  }
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
/* Style pour le SVG du logo principal uniquement */
:deep(.h-80 svg),
:deep(.md\:h-\[500px\] svg),
:deep(.lg\:h-\[600px\] svg) {
  width: 100%;
  height: 100%;
  display: block;
}

/* Les icônes SVG dans la bulle et la modale gardent leur taille définie */
.comic-bubble svg,
.tooltip-modal svg {
  width: auto !important;
  height: auto !important;
}

/* Style pour les thèmes cliquables dans le SVG */
:deep(.theme-clickable) {
  cursor: pointer;
  transition: all 0.3s ease;
}


:deep(.theme-clickable circle) {
  transition: all 0.3s ease;
}

:deep(.theme-clickable:hover circle) {
  stroke-width: 0.8;
}

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

/* Style de bulle de BD */
.comic-bubble {
  position: relative;
  background: white;
  animation: bounce-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.3),
    0 5px 15px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
}

.comic-bubble::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.5), transparent);
  border-radius: 1.5rem;
  pointer-events: none;
  z-index: -1;
}

@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: scale(0.3) translateY(-50px);
  }
  50% {
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.97);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Transition pour la bulle */
.bubble-enter-active {
  animation: bounce-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.bubble-leave-active {
  transition: all 0.3s ease-in;
}

.bubble-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(-20px);
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

/* Limite de hauteur pour mobile */
@media (max-width: 768px) {
  .comic-bubble {
    max-height: 65vh;
  }
}
</style>

