<template>
    <h6 :id="id">
        <slot />
    </h6>
</template>

<script setup lang="ts">
const props = defineProps<{ id?: string }>()
</script>