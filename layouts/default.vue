<script setup lang="ts">
const NUM = 40

onMounted(() => {
  const w = window.innerWidth
  const h = window.innerHeight
  const contaniner = document.querySelector('.svg-container')!
  const flowerArray = new Array(NUM).fill(0)
  const spacing = w / (NUM + 1)
  flowerArray.forEach((_, index) => {
    const svg = document.querySelector(".svg")!.cloneNode(true) as SVGElement
    svg.style.left = `${index * spacing}px`
    svg.style.top = `${Math.random() * h}px`
    contaniner.appendChild(svg)
  })
})

</script>

<template>
  <main class="min-h-screen">
    <div class="fixed top-0 left-0 w-full h-full -z-10 svg-container overflow-hidden">
      <svg width="20" height="20" viewBox="-100 -100 200 200" class="svg absolute top-10 left-10">
        <defs>
          <path id="branch" d="
            M 0 0 L 0 -90
            M 0 -20 L 20 -34
            M 0 -20 L -20 -34
            M 0 -40 L 20 -54
            M 0 -40 L -20 -54
            M 0 -60 L 20 -74
            M 0 -60 L -20 -74" stroke-width="4" class="flower" />
        </defs>
        <use href="#branch" />
        <use href="#branch" transform="rotate(60)" />
        <use href="#branch" transform="rotate(120)" />
        <use href="#branch" transform="rotate(180)" />
        <use href="#branch" transform="rotate(240)" />
        <use href="#branch" transform="rotate(300)" />
      </svg>
    </div>
    <NavBar />
    <div class="px-10 mb-10 pt-10 min-h-96">
      <slot />
    </div>
    <Footer />
  </main>
</template>