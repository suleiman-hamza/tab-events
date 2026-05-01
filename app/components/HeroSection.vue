<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const links = ref<ButtonProps[]>([
  {
    label: 'Try it for free',
    to: '/auth',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right',
  },
])
</script>

<template>
  <UPageHero title="The Smarter Way to Manage Events" description="A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications." :links="links">
    <img
      src="/images/image4.png"
      alt="App screenshot"
      class="rounded-lg shadow-2xl ring ring-default mx-auto"
    >
  </UPageHero>
</template>
