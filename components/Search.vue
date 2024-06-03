<script setup lang="ts">
const search = ref("");

const result = ref([]);

watch(search, async (value) => {
  const results = await searchContent(search, {
    miniSearch: {
      fields: ["title", "description"],
    },
  });
});
</script>

<template>
  <div>
    <input v-model="search" />

    <pre>{{ result }} </pre>
  </div>
</template>
