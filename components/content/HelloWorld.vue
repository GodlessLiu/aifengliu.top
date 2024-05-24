<script setup lang="ts">
function handleClick() {
    alert('Hello World');
}
</script>

<template>
    <button class="border hover:shadow-lg duration-200 rounded-md shadow-md text-center p-2" @click="handleClick">
        Hello World
    </button>
</template>