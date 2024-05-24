<script setup lang="ts">
import { throttle } from "lodash"


const isShow = ref(false)

function backTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

const fn = throttle(() => {
    if (window.scrollY > 100) {
        isShow.value = true
    } else {
        isShow.value = false
    }
}, 500)

onMounted(() => {
    window.addEventListener('scroll', fn)

})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', fn)
})

</script>

<template>
    <span v-show="isShow" @click="backTop"
        class="cursor-pointer text-gray-500 text-xl fixed right-4 bottom-4 inline-block h-10 w-10 shadow-sm border text-center leading-10 rounded-full">
        ↑
    </span>
</template>