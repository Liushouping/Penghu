// https://nuxt.com/docs/api/configuration/nuxt-config
// import * as path from 'path';
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-primevue'],
  primevue: {
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
    components: {
      exclude: ["Editor", "Chart"]
    }
  },
  css: ["primevue/resources/themes/lara-dark-indigo/theme.css"]
});