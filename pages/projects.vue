<script setup lang="ts">
import { projectConfig } from "@/config/projects";
useHead({
  title: "Projects - Hilary Liu",
  meta: [
    {
      name: "description",
      content: "Hilary Liu's projects page."
    }
  ]
})

</script>

<template>
  <div class="projects min-h-96 mx-auto px-4">
    <ul class="grid grid-cols-1 gap-2 md:grid-cols-2">
      <ProjectItem v-for="project in projectConfig" :key="project.name" :project="project" />
    </ul>
  </div>
</template>