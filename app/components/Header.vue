<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Docs',
    to: '/docs/getting-started',
    active: route.path.startsWith('/docs/getting-started'),
  },
  {
    label: 'Components',
    to: '/docs/components',
    active: route.path.startsWith('/docs/components'),
  },
  {
    label: 'Login',
    to: '/auth',
    active: route.path.startsWith('/auth'),
  },
])
</script>

<template>
  <UHeader>
    <template #title>
      <NuxtLink to="/">
        <img src="/images/logo_svg.svg" alt="app logo svg" class="h-6 w-6">
      </NuxtLink>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />
    </template>
  </UHeader>
</template>
