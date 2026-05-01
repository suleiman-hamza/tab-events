<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const cards = ref([
  {
    title: 'Icons',
    description: 'Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.',
    icon: 'i-lucide-smile',
    to: '/docs/getting-started/integrations/icons',
    image: '/images/logo_svg.svg',
  },
  {
    title: 'Fonts',
    description: 'Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.',
    icon: 'i-lucide-a-large-small',
    to: '/docs/getting-started/integrations/fonts',
    image: '/images/logo_svg.svg',
  },
  {
    title: 'Color Mode',
    description: 'Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.',
    icon: 'i-lucide-sun-moon',
    to: '/docs/getting-started/integrations/color-mode',
    image: '/images/logo_svg.svg',
  },
])
</script>

<template>
  <HeroSection />
  <UPageSection title="Features" description="Discover the powerful features of our UI library." :ui="{ body: '' }">
    <template #body>
      <UPageGrid>
        <UPageCard
          v-for="(card, index) in cards"
          :key="index"
          :ui="{ root: 'rounded-none border' }"
        >
          <template #default>
            <div class="">
              <h3 class="font-semibold text-lg mb-1">
                {{ card.title }}
              </h3>
              <p class="text-sm text-muted-foreground">
                {{ card.description }}
              </p>
            </div>
          </template>
        </UPageCard>
      </UPageGrid>
    </template>
  </UPageSection>
  <UPageSection title="Loved by the community" description="Don't take our word for it - listen to what our community members have to say." orientation="horizontal">
    <div>
      <p>
        40m+
        Weekly NPM downloads
      </p>
    </div>
  </UPageSection>
</template>
