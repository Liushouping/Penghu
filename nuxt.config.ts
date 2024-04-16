// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'title',
      meta: [
        { name: 'description', content: '123' },
        { property: 'og:title', content: '123' },
        { property: 'og:description', content: '123' },
        { property: 'og:image', content: '/' }
      ],
      link: [
        // {
        //   rel: 'canonical', href: '/'
        // },
        // { 
        //   rel: 'icon', type: 'image/png', href: '/favicon.png' 
        // },
        // { 
        //   rel: 'apple-touch-icon', href: '/favicon.png' 
        // },
      ],
    },
  },
  modules: [
    // '@nuxtjs/tailwindcss',
    '@nuxt/ui'
  ],
  // site: {
  //   url: 'https://bbtaipei.com',
  //   name: 'BB TAIPEI',
  // },
  // gtag: {
  //   id: '',
  //   config: {
  //     page_title: 'BBtaipei',

  //   }
  // },
  css: ['~/assets/css/base.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    
  ],
})