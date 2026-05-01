<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Events',
    to: '/app/event',
  },
  {
    label: 'Get Started',
    to: '/auth',
  },
])
</script>

<template>
  <UHeader mode="slideover">
    <template #title>
      <NuxtLink to="/" class="border border-white border-dashed flex gap-4 items-center">
        <img src="/images/logo_svg.svg" alt="app logo svg" class="h-6 w-6 text-white">
        <h1 class="border">
          alto
        </h1>
      </NuxtLink>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />
    </template>

    <!-- Toggle menu/slideover -->
    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
