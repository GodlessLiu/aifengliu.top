<script setup lang="ts">
import { siteConfig } from "@/config/siteConfig";
</script>

<template>
    <div class="mt-2">
        <nav class="flex-row justify-between px-6 py-4 text-xl flex">
            <NuxtLink to="/">
                <img src="/favicon.ico" alt="Hilary liu" />
            </NuxtLink>
            <ul class="flex gap-6">
                <li v-for="item in siteConfig.navItems" class="text-base hover:underline hover:opacity-50">
                    <NuxtLink :to="item.href">
                        <span class="sm:inline-block hidden">
                            {{ item.label }}
                        </span>
                        <span class=" sm:hidden inline-block cursor-pointer" :title="item.label">
                            <Icon size="24" :name="item.icon!" class=" text-black" />
                        </span>
                    </NuxtLink>

                </li>
            </ul>
        </nav>
    </div>
</template>