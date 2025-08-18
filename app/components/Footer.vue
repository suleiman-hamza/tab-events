<script setup lang="ts">
const links = [
    {
        label: 'Source Code',
        to: 'https://github.com/HugoRCD/nuxt-better-auth',
        target: '_blank',
    },
    {
        label: 'Better Auth',
        to: 'https://better-auth.com',
        target: '_blank',
    },
    {
        label: 'Nuxt',
        to: 'https://nuxt.com',
        target: '_blank',
    },
    {
        label: 'Vercel',
        to: 'https://vercel.com',
        target: '_blank',
    }
]
</script>

<template>
    <USeparator icon="i-simple-icons-nuxtdotjs" type="dashed" class="h-px" />
    <footer class="flex flex-col-reverse items-center justify-center sm:flex-row gap-4 p-4">
        <div class="">
            <p class="text-muted text-sm">
                Copyright © {{ new Date().getFullYear() }}
            </p>
        </div>

        <div class="flex gap-4">
            <NuxtLink v-for="items in links" :to="items.to">{{ items.label }}</NuxtLink>
        </div>

        <div class="flex gap-2">
            <UButton icon="i-simple-icons-x" color="neutral" variant="ghost" to="https://x.com/thee_hamza001"
                target="_blank" aria-label="X" />
            <UButton icon="i-simple-icons-github" color="neutral" variant="ghost"
                to="https://github.com/suleiman-hamza" target="_blank" aria-label="GitHub" />
        </div>
    </footer>
</template>