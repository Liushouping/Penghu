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
      title: '航海王動畫25週年璀璨之夜 X 2024澎湖國際海上花火節',
      meta: [
        { name: 'description', content: '2024年你不能錯過的精彩盛事，草帽一行人霸氣登場！ 首次以航海王為主題的無人機及煙火表演，讓人回味草帽一行人冒險感動的星光電影院，氣勢滂薄交響樂及熱血沸騰的歌曲表演。一系列週邊限定商品、主題輕食等，帶給你滿滿的驚喜，一起與草帽一行人前往澎湖冒險！與魯夫齊聲呼喊一起成為海賊王吧！' },
        { property: 'og:title', content: '航海王動畫25週年璀璨之夜 X 2024澎湖國際海上花火節' },
        { property: 'og:description', content: '2024年你不能錯過的精彩盛事，草帽一行人霸氣登場！ 首次以航海王為主題的無人機及煙火表演，讓人回味草帽一行人冒險感動的星光電影院，氣勢滂薄交響樂及熱血沸騰的歌曲表演。一系列週邊限定商品、主題輕食等，帶給你滿滿的驚喜，一起與草帽一行人前往澎湖冒險！與魯夫齊聲呼喊一起成為海賊王吧！' },
        { property: 'og:image', content: '/' }
      ],
      link: [
        // {
        //   rel: 'canonical', href: '/'
        // },
        { 
          rel: 'icon', type: 'image/png', href: '/favicon.png' 
        },
        { 
          rel: 'apple-touch-icon', href: '/favicon.png' 
        },
      ],
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-aos'
    // '@nuxt/ui'
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