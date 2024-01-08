// This resets the page title when navigating between routes
export default defineNuxtRouteMiddleware(() => {
  // const siteName = useRuntimeConfig().public.siteName;
  useSeoMeta({
    title: 'MHOX'
  })
})