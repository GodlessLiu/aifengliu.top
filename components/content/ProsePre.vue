<template>
    <pre :class="$props.class" class="relative group">
        <span class=" inline-block absolute -top-1 right-3 group-hover:visible invisible cursor-pointer" @click="() => handleCopy()">
            copy
        </span>
        <slot />
    </pre>
</template>

<script setup lang="ts">
const props = defineProps({
    code: {
        type: String,
        default: ''
    },
    language: {
        type: String,
        default: null
    },
    filename: {
        type: String,
        default: null
    },
    highlights: {
        type: Array as () => number[],
        default: () => []
    },
    meta: {
        type: String,
        default: null
    },
    class: {
        type: String,
        default: null
    }
})
function handleCopy() {
    navigator.clipboard.writeText(props.code)
    useNuxtApp().$toast('Copied to clipboard!');
}
</script>

<style>
pre code .line {
    display: block;
}
</style>