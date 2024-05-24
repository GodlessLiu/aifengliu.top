<template>
    <h1 :id="id">
        <slot />
    </h1>
</template>

<script setup lang="ts">

const props = defineProps<{ id?: string }>()

</script>