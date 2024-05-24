<template>
    <h4 :id="id">
        <slot />
    </h4>
</template>

<script setup lang="ts">

const props = defineProps<{ id?: string }>()

</script>