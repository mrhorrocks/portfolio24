// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // Disable Server Side rendering
  devtools: {
    enabled: false,
    timeline: {
      enabled: true
    }
  },
  modules: ['@nuxt/content'],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: process.env.SITE_NAME,
      meta: [{ name: 'description', content: 'TBC' }],
    }
  },
  css: [
    "@/assets/scss/global.scss",
  ],
  runtimeConfig: {
    public: {
      // Shows in the client
      siteName: process.env.SITE_NAME,
    }
  }

})