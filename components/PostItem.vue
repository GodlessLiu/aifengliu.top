<script setup lang="ts">
interface ArticleInfo {
  title: string;
  description: string;
  date: string;
  duration: string;
  _path: string;
}
const { article } = defineProps<{
  article: ArticleInfo;
}>();
function getFileNameByPath(path: string) {
  return path.split("/").at(-1);
}
const router = useRouter();
</script>

<template>
  <h2 :title="article.description">
    <div
      class="cursor-pointer inline-block text-gray-500 hover:opacity-100 opacity-50"
      @click="router.push(`/posts/${getFileNameByPath(article._path)}`)"
    >
      {{ article.title }}
      <span class="text-xs text-gray-400">
        <span class="mx-1">
          {{ useDayjs(article.date) }}
        </span>
        <span>
          ·
          {{ article.duration }}
        </span>
      </span>
    </div>
  </h2>
</template>
