<script setup lang="ts">
import type { MomentItemProps } from '~/config/moment';

const { moment } = defineProps<{
    moment: MomentItemProps,
}>()


const imagClass = computed(() => {
    if (moment.images.length < 4) return "grid grid-cols-2 gap-2 md:w-2/3 w-full"
    else if (moment.images.length === 4) return "grid grid-cols-2 gap-2 md:w-2/3 w-full"
    else return "grid grid-cols-3 gap-2 md:w-2/3 w-full"
})

</script>

<template>
    <div class="shadow-lg rounded-lg pt-2 px-4 mb-16 border pb-4 bg relative">
        <div class="flex items-start mb-3">
            <img :src="moment?.avator" class="rounded-full w-12 h-12 mr-4" alt="用户头像">
            <div class="flex-1">
                <h2 class="font-bold">{{ moment?.name }}</h2><span class="text-gray-500 text-xs">{{
                    useDayjs(moment?.time, 'ymdhm') }}</span>
            </div>
        </div>
        <p class="text-gray-600 mb-2" v-html="moment.content"></p>
        <div :class="imagClass">
            <div class="aspect-square overflow-hidden cursor-pointer" v-for="image in moment?.images" :key="image">
                <img :src="image" alt="朋友圈图片" class="img w-full">
            </div>
        </div>
        <span style="background-image: url(/moment-bg.svg);"
            class="absolute right-0 bottom-0 inline-block h-40 w-40 bg-cover">
        </span>
    </div>
</template>