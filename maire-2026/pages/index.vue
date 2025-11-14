<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            Unis pour les laurentinois
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-primary-100">
            Un projet ambitieux pour les élections municipales de 2026
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/programme" class="btn-primary inline-block">
              Découvrir notre programme
            </NuxtLink>
            <NuxtLink to="/candidats" class="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded transition-colors duration-200 inline-block">
              Rencontrer l'équipe
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Présentation -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-8 text-gray-800">
            Notre Vision
          </h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="card">
              <div class="text-primary-500 mb-4">
                <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-3 text-gray-800">Une équipe engagée</h3>
              <p class="text-gray-600">
                Des femmes et des hommes dévoués, prêts à servir notre commune avec passion et détermination.
              </p>
            </div>

            <div class="card">
              <div class="text-primary-500 mb-4">
                <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-3 text-gray-800">Des engagements concrets</h3>
              <p class="text-gray-600">
                Un programme réaliste et ambitieux, construit avec et pour les habitants de notre commune.
              </p>
            </div>

            <div class="card">
              <div class="text-primary-500 mb-4">
                <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-3 text-gray-800">Un avenir durable</h3>
              <p class="text-gray-600">
                Des projets pensés pour préserver notre environnement et améliorer notre cadre de vie.
              </p>
            </div>

            <div class="card">
              <div class="text-primary-500 mb-4">
                <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-3 text-gray-800">Une gestion transparente</h3>
              <p class="text-gray-600">
                Une gestion responsable des finances publiques avec transparence et déontologie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Piliers du Programme -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
          Les 5 piliers de notre programme
        </h2>
        <div class="max-w-5xl mx-auto grid md:grid-cols-5 gap-6">
          <div class="text-center">
            <div class="bg-primary-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <span class="text-2xl">🤝</span>
            </div>
            <h3 class="font-semibold text-gray-800">Soutien aux associations</h3>
          </div>
          <div class="text-center">
            <div class="bg-primary-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <span class="text-2xl">💧</span>
            </div>
            <h3 class="font-semibold text-gray-800">L'eau</h3>
          </div>
          <div class="text-center">
            <div class="bg-primary-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <span class="text-2xl">🏔️</span>
            </div>
            <h3 class="font-semibold text-gray-800">Mieux vivre en Chartreuse</h3>
          </div>
          <div class="text-center">
            <div class="bg-primary-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <span class="text-2xl">⚖️</span>
            </div>
            <h3 class="font-semibold text-gray-800">Restaurer la déontologie</h3>
          </div>
          <div class="text-center">
            <div class="bg-primary-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <span class="text-2xl">💰</span>
            </div>
            <h3 class="font-semibold text-gray-800">Finances</h3>
          </div>
        </div>
        <div class="text-center mt-12">
          <NuxtLink to="/programme" class="btn-primary inline-block">
            Voir le programme détaillé
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Section Call to Action -->
    <section class="py-16 bg-primary-600 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">
          Rejoignez-nous !
        </h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Vous partagez nos valeurs ? Vous souhaitez nous soutenir ou en savoir plus sur notre projet ?
        </p>
        <NuxtLink to="/contact" class="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded transition-colors duration-200 inline-block">
          Contactez-nous
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Accueil - Maire 2026',
  meta: [
    {
      name: 'description',
      content: 'Découvrez notre projet pour les élections municipales de 2026. Une équipe engagée pour un avenir meilleur.',
    },
  ],
})
</script>

