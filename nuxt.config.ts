// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },
  runtimeConfig: {
    // Clés privées (disponibles uniquement côté serveur)
    resendApiKey: process.env.RESEND_API_KEY || '',
  },
  app: {
    head: {
      title: 'Unis pour les laurentinois - Christian Allegret',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Candidature de Christian Allegret aux élections municipales 2026. Ensemble, construisons la commune que vous méritez.' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Unis pour les laurentinois - Christian Allegret' },
        { property: 'og:description', content: 'Candidature de Christian Allegret aux élections municipales 2026. Ensemble, construisons la commune que vous méritez.' },
        { property: 'og:image', content: '/images/solidarity-logo.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Unis pour les laurentinois - Christian Allegret' },
        { name: 'twitter:description', content: 'Candidature de Christian Allegret aux élections municipales 2026. Ensemble, construisons la commune que vous méritez.' },
        { name: 'twitter:image', content: '/images/solidarity-logo.png' }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/images/solidarity-logo.png'
        },
        {
          rel: 'apple-touch-icon',
          href: '/images/solidarity-logo.png'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap'
        }
      ]
    }
  }
})
