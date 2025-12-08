<template>
  <footer class="bg-secondary-700 text-white mt-auto">
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Section Logo et Description -->
        <div>
          <h3 class="text-xl font-bold mb-4">Unis pour les laurentinois</h3>
          <p class="text-secondary-100">
            Un projet pour notre commune, un engagement pour l'avenir.
          </p>
        </div>

        <!-- Section Navigation -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Navigation</h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/" class="text-secondary-100 hover:text-white transition-colors duration-200">
                Accueil
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/candidats" class="text-secondary-100 hover:text-white transition-colors duration-200">
                Candidats
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/programme" class="text-secondary-100 hover:text-white transition-colors duration-200">
                Programme
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="text-secondary-100 hover:text-white transition-colors duration-200">
                Contact
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Section Contact -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Contact</h4>
          <ul class="space-y-2 text-secondary-100">
            <li>Email : contact@unispourleslaurentinois.fr</li>
            <li>Téléphone : 01 23 45 67 89</li>
            <li class="pt-4">
              <!-- Réseaux sociaux - à personnaliser -->
              <div class="flex space-x-4">
                <a href="#" class="hover:text-white transition-colors duration-200" aria-label="Facebook">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" class="hover:text-white transition-colors duration-200" aria-label="Twitter">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-secondary-600 mt-8 pt-6 text-center text-secondary-200">
        <p>&copy; {{ currentYear }} Unis pour les laurentinois. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

