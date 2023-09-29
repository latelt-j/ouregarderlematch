// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  dir: {
    public: 'docs' // not sure,
  },
  nitro: {
    static: true,
  },
  app: {
    head: {
      title: 'Ou regarder le match',
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lora&display=swap' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
      ]
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss']
});