// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "nuxt-icon"],
  content: {
    experimental: {
      search: {
        indexed: true,
      },
    },
    // ... options
    highlight: {
      langs: [
        "javascript",
        "css",
        "scss",
        "html",
        "json",
        "markdown",
        "nginx",
        "yaml",
        "bash",
        "typescript",
      ],
      // Theme used in all color schemes.
      theme: "github-light",
    },
  },
});
