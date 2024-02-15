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
  // nitro: {
  //   prerender: {
  //     routes: [
  //       // '/blog'
  //     ],
  //     ignore: [
  //       // '/blog'
  //     ]
  //   }
  // },
  modules: ['@nuxt/content'],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      // title: process.env.SITE_NAME,
      title: 'Title - TBC',
      meta: [{ name: 'description', content: 'TBC' }],
      // bodyAttrs: {
      //   class: 'bg-gray-100',
      // },
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