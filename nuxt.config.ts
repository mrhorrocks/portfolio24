export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  router: {
    options: {
      strict: false,
    },
  },
  sourcemap: true,
  css: [
    "@/assets/scss/global.scss",
  ],
  experimental: {
    payloadExtraction: true
  },
  modules: ['@nuxt/content', '@pinia/nuxt', 'nuxt-icons'],

  app: {
    head: {
      title: 'MHOX',
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'description',
          content: 'FRONT-END DEVELOPER, I build websites with Nuxt'
        },
        {
          name: 'keywords',
          content: 'HTML, CSS, SASS, NUXT'
        }
      ],
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
  }
})