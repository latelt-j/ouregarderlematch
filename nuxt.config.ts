// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lora&display=swap' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
      ]
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss']
});