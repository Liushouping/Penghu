// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path';
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
        title: 'Title',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'description', content: 'Build your own UI library with the flexibility of Tailwind CSS and the convenience of PrimeVue components.' },
            { name: 'robots', content: 'index,follow' },
        ],
    }
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-primevue'],
  primevue: {
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
    components: {
      exclude: ["Editor", "Chart"]
    },
  },
  css: ["primevue/resources/themes/lara-dark-indigo/theme.css"]
});