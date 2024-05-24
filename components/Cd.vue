<script setup lang="ts">
const router = useRouter()
</script>

<template>
    <span class="block text-gray-400 mt-4" @click="() => router.back()">
        <span class=" mr-1">&gt;</span> <span class=" hover:text-black border-b pb-1 cursor-pointer">cd .
            .</span>
    </span>
</template>