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
      link: [
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
