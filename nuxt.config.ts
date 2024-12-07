// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'FrontedCrumbs', // This is the name that will appear in the browser tab
      meta: [
        { name: 'description', content: 'Your amazing FrontedCrumbs application' },
      ],
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@nuxt/content'
  ],
  content: {
    highlight: {
      theme: 'nord',
    }
  },
  colorMode: {
    classSuffix: '',
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  pages: true,
 
  // typescript: {

  //   shim: false
  // },
  // components: [{
  //   path: '~/components',
  //   pathPrefix: false
  // }]
})