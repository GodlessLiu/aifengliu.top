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
  <div class="banner markdown-body bg">
    <article class="" v-html="$mdRenderer.render(profileText)" />
    <h4>
      <p>
        我的<a href="https://github.com/GodlessLiu" target="_blank">Github</a>情况:
      </p>
      <img src="https://ghchart.rshah.org/GodlessLiu" alt="GodlessLiu's Github chart" class="w-full" />
    </h4>
  </div>
</template>
