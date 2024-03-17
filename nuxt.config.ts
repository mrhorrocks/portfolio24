export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  router: {
    options: {
      strict: false,
    },
  },
  sourcemap: false,

  experimental: {
    payloadExtraction: true
  },
  modules: ['@nuxt/content'],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      // title: process.env.SITE_NAME,
      title: 'Home - MHOX',
      meta: [{ name: 'description', content: 'TBC' }],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap',
        }
      ],

    }
  },
  css: [
    "@/assets/scss/global.scss",
  ]
  // runtimeConfig: {
  //   public: {
  //     // Shows in the client
  //     siteName: process.env.SITE_NAME,
  //   }
  // }

})