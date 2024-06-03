<script setup lang="ts">
import { siteConfig } from "~/config/siteConfig";
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

useHead({
  title: siteConfig.metadata.post_title,
  meta: [
    {
      name: "description",
      content: siteConfig.metadata.post_description,
    },
  ],
});
const query: QueryBuilderParams = { path: "/articles", sort: [{ date: -1 }] };
</script>

<template>
  <div class="text-center banner">
    <Search />
    <ContentList :query="query" v-slot="{ list }">
      <div v-for="article in list" :key="article._path" class="mb-1">
        <PostItem :article="article" />
      </div>
    </ContentList>
  </div>
</template>
