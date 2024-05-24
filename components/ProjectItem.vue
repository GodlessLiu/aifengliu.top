<script setup lang="ts">
import type { ProjectConfig } from '~/config/projects';

const { project } = defineProps<{
    project: ProjectConfig,
}>()

</script>

<template>
    <li class="rounded-md border hover:shadow-xl shadow-sm duration-300 bg-cover"
        style="background-image: url(/bg.png);">
        <div class="bg p-2 pt-3">
            <div class="flex flex-col sm:flex-row">
                <img :src="project.image" :alt="project.description" v-if="project.image"
                    class="min-h-[130px] sm:h-[130px] min-w-[130px] sm:w-[130px] rounded-xl">
                <span
                    class=" min-h-[130px] sm:h-[130px] min-w-[130px] sm:w-[130px] rounded-xl bg-gray-200 text-5xl flex justify-center items-center"
                    v-else>
                    {{ project.name.slice(0, 1) }}
                </span>
                <div class="pt-4 sm:pt-0 sm:pl-4 flex-1 min-w-0">
                    <h3 class=" font-semibold tracking-tight text-xl mb-1">{{ project.name }}</h3>
                    <div class="text-ellipsis line-clamp-3 overflow-hidden">{{ project.description }}</div>
                    <div class="text-xs text-muted-foreground mt-2">
                        <div class="flex flex-wrap items-center">
                            <span>
                                技术栈：
                            </span>
                            <span v-for=" stack in project.stacks"
                                class="p-1 bg-gray-100 mr-2 rounded-sm hover:bg-gray-200 font-blod">
                                <a :href="stack.link">{{ stack.name }}</a>
                            </span>
                        </div>

                    </div>
                </div>
            </div>
            <div class="flex flex-row justify-end mr-4">
                <a :href="project.github" target="_blank">See</a>
            </div>
        </div>
    </li>
</template>