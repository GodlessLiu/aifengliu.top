// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "nuxt-icon"],
  content: {
    experimental: {
      search: {
        indexed: false
      }
    },
    // ... options
    highlight: {
      langs: ['javascript', 'css', 'html', 'json', 'markdown', 'nginx'],
      // Theme used in all color schemes.
      theme: 'github-light'
    }
  },
})