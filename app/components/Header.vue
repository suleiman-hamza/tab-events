<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Docs',
    to: '/',
    active: route.path.startsWith(''),
  },
  {
    label: 'Components',
    to: '/',
    active: route.path.startsWith('/'),
  },
  {
    label: 'Login',
    to: '/auth',
    active: route.path.startsWith('/auth'),
  },
])
</script>

<template>
  <UHeader mode="slideover">
    <template #title>
      <NuxtLink to="/" class="border border-white border-dashed">
        <img src="/images/logo_svg.svg" alt="app logo svg" class="h-6 w-6">
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
