<script setup lang="ts">
import { moments } from "@/config/moment"
import lightGallery from 'lightgallery';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgZoom from 'lightgallery/plugins/zoom';
import "lightgallery/css/lightgallery.css"



useHead({
  title: "Moments - Hilary Liu",
  meta: [
    {
      name: "description",
      content: "Moments of my life"
    }
  ]
})
onMounted(() => {
  lightGallery(document.getElementById('moments')!, {
    plugins: [lgZoom, lgFullscreen],
    licenseKey: 'Hilary Liu',
    speed: 500,
    selector: ".img"
  });
})
</script>


<template>
  <div class="banner">
    <div id="moments">
      <MomentItem v-for="moment in moments" :key="moment.time" :moment />
    </div>
  </div>
</template>