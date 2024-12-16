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
  components: {
    dirs: [
      '~/components', // Default folder
      '~/components/ui', // Custom folder (adjust as needed)
    ],
  },  compatibilityDate: '2024-11-01',
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
    }, 
    markdown: {
      remarkPlugins: [],
      rehypePlugins: [],
      mdc: true,

    }, 
   
  },

  colorMode: {
    classSuffix: '',
  },
  
  shadcn: {
    
    prefix: '',
    
    componentDir: './components/ui'
  },
  pages: true,
 
  
  
})