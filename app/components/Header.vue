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
  <UHeader mode="slideover" :ui="{ root: 'border-secondary-500', title: 'items-center' }">
    <template #title>
      <Logo />
      <span class="">
        alto
      </span>
    </template>

    <UNavigationMenu :items="items" variant="link" />

    <template #right>
      <UColorModeButton />
    </template>

    <!-- Toggle menu/slideover -->
    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
