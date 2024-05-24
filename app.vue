<script setup lang="ts">
import "@/styles/index.css";
useHead({
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
    },
    {
      name: 'keywords',
      content: "blog,Hilary Liu,个人博客,前端,技术"
    },
    {
      name: 'description',
      content: "Hilary Liu's blog"
    }
  ],
  link: [
    {
      rel: "stylesheet",
      type: "text/css",
      href: "https://cdn.staticfile.net/lxgw-wenkai-webfont/1.7.0/style.css",
    }
  ]
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
body,
.markdown-body {
  font-family: "LXGW WenKai", PingFang SC, Hiragino Sans GB, Droid Sans Fallback, Microsoft YaHei, sans-serif !important;
}
</style>