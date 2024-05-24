<script setup lang="ts">
import lightGallery from 'lightgallery';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgZoom from 'lightgallery/plugins/zoom';
import "lightgallery/css/lightgallery.css"
import tocbot from 'tocbot'

const router = useRouter()
const route = useRoute()
const { slug } = route.params as { slug: string }
const { data } = await useAsyncData('page-data', () => queryContent("/articles/" + slug).findOne())
if (!data.value) router.push('/404')

useHead({
  title: `Post - ${slug}`,
  meta: [
    {
      name: 'description',
      content: `post's content - ${slug}`
    }
  ]

})
onMounted(() => {
  lightGallery(document.getElementById('content')!, {
    plugins: [lgZoom, lgFullscreen],
    licenseKey: 'Hilary Liu',
    speed: 500,
    selector: ".img-select"
  });
  tocbot.init({
    tocSelector: '.toc-container',
    contentSelector: '.markdown-body',
    listItemClass: 'toc-list-item text-ellipsis line-clamp-1 word-break',
    headingsOffset: 10,
    headingSelector: 'h1, h2, h3',
    scrollSmooth: true,
    scrollSmoothDuration: 300,
    scrollSmoothOffset: -100,
    hasInnerContainers: true,
  });
})

onBeforeUnmount(() => {
  tocbot.destroy()
})
</script>

<template>
  <div class=" article">
    <BackTop />
    <article class="mb-10 banner" id="content">
      <div class="group fixed left-4 top-24 hidden xl:inline-block w-[200px] h-full z-50">
        三
        <div class="toc-container group-hover:visible text-left invisible absolute pt-2 pl-4 duration-300">
        </div>
      </div>
      <ContentRenderer v-if="data" :value="data">
        <h1 class=" text-2xl font-bold break-words mb-2">{{ data.title }}</h1>
        <div class=" flex gap-2 text-gray-400 text-xs mb-4">
          <time class=" mr-1">{{ useDayjs(data.date) }}</time>
          <em>{{ data.duration }}</em>
        </div>
        <ContentRendererMarkdown :value="data" class="markdown-body bg" />
        <Cd />
      </ContentRenderer>
    </article>
  </div>
</template>