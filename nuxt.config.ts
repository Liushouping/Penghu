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
      title: '航海王動畫25週年璀璨之夜 ',
      meta: [
        { name: 'description', content: '2024年你不能錯過的盛事，草帽一行人霸氣登場！' },
        { property: 'og:title', content: '航海王動畫25週年璀璨之夜 ' },
        { property: 'og:description', content: '2024年你不能錯過的盛事，草帽一行人霸氣登場！' },
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