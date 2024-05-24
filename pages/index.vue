<script setup lang="ts">
import "@/styles/markdown.css";
import { siteConfig } from "~/config/siteConfig";
const { profileText } = await useGithubProfile();
useHead({
  title: siteConfig.metadata.home_title,
  meta: [
    {
      name: 'description',
      content: siteConfig.metadata.home_description
    }
  ]
})
</script>

<template>
  <div class="banner">
    <article class="markdown-body bg" v-html="$mdRenderer.render(profileText)" />
  </div>
</template>
