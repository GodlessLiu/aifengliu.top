<template>
    <h3 :id="id">
        <slot />
    </h3>
</template>

<script setup lang="ts">

const props = defineProps<{ id?: string }>()

</script>