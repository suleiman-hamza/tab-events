<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'

const items = ref<AccordionItem[]>([
  {
    label: 'Icons',
    icon: 'i-lucide-smile',
    content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
  },
  {
    label: 'Colors',
    icon: 'i-lucide-swatch-book',
    content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
  },
  {
    label: 'Components',
    icon: 'i-lucide-box',
    content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
  }
])
</script>

<template>
  <section class="p-4">
    <div>
      <h2 class="text-red-500 text-2xl">
        The index page
      </h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quo impedit libero dicta corporis pariatur, aperiam qui provident doloremque sint, quos sunt quis at nesciunt velit labore officia ab odit.</p>
      <nuxt-link to="/about">
        About
      </nuxt-link>
      <UAccordion :items="items" />
    </div>
  </section>
</template>
