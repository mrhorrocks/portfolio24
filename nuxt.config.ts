// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  router: {
    options: {
      strict: false,
    },
  },
  modules: ['@nuxt/content'],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      // title: process.env.SITE_NAME,
      title: 'Title - TBC',
      meta: [{ name: 'description', content: 'TBC' }],
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