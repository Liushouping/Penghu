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
        { property: 'og:image', content: '/og-img.webp' }
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
  aos: {
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  }
})