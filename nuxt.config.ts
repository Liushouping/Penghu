export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: '航海王動畫25週年璀璨之夜',
      meta: [
        { name: 'description', content: '2024年你不能錯過的精彩盛事，草帽一行人霸氣登場！ 首次以航海王為主題的無人機及煙火表演，讓人回味草帽一行人冒險感動的星光電影院，氣勢滂薄交響樂及熱血沸騰的歌曲表演。一系列週邊限定商品、主題輕食等，帶給你滿滿的驚喜，一起與草帽一行人前往澎湖冒險！與魯夫齊聲呼喊一起成為海賊王吧！' },
        { property: 'og:title', content: '航海王動畫25週年璀璨之夜' },
        { property: 'og:description', content: '2024年你不能錯過的精彩盛事，草帽一行人霸氣登場！ 首次以航海王為主題的無人機及煙火表演，讓人回味草帽一行人冒險感動的星光電影院，氣勢滂薄交響樂及熱血沸騰的歌曲表演。一系列週邊限定商品、主題輕食等，帶給你滿滿的驚喜，一起與草帽一行人前往澎湖冒險！與魯夫齊聲呼喊一起成為海賊王吧！' },
        { property: 'og:image', content: '/ONEPIECE2024.jpg' }
      ],
      link: [
        // {
        //   rel: 'canonical', href: '/'
        // },
        { 
          rel: 'icon', type: 'image/png', href: '/og-img.webp' 
        },
        { 
          rel: 'apple-touch-icon', href: '/og-img.webp' 
        },
      ],
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-aos'
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
})