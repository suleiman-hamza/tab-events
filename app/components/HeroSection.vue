<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const links = ref<ButtonProps[]>([
  {
    label: 'Create Your Event',
    to: '/auth',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right',
  },
])
</script>

<template>
  <UPageHero title="Where Vision Meets Venue." description="The all-in-one platform to create, manage, and scale your events. From custom booking links to instant ticket generation, Alto handles the logistics so you can focus on the experience." :links="links">
    <img
      src="/images/image4.png"
      alt="App screenshot"
      class="rounded-lg shadow-2xl ring ring-default mx-auto"
    >
  </UPageHero>
</template>
