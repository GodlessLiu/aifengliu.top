<template>
    <h2 :id="id">
        <slot />
    </h2>
</template>

<script setup lang="ts">

const props = defineProps<{ id?: string }>()

</script>