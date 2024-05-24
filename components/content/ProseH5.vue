<template>
    <h5 :id="id">
        <slot />
    </h5>
</template>

<script setup lang="ts">

const props = defineProps<{ id?: string }>()

</script>