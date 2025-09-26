<script setup lang="ts">
import type { SelectItem } from '@nuxt/ui'

const state = reactive({
  name: undefined,
  file: undefined,
  visibility: undefined,
})

const items = ref([
  {
    label: 'Public',
    value: 'public',
    icon: 'i-lucide-globe',
  },
  {
    label: 'Private',
    value: 'private',
    icon: 'i-lucide-circle-plus',
  },
] satisfies SelectItem[])

const value = ref(items.value[0]?.value)

const icon = computed(() => items.value.find(item => item.value === value.value)?.icon)
</script>

<template>
  <section>
    <UForm :state class="flex flex-col gap-4 mb-4 sm:flex-row max-w-6xl mx-auto">
      <UFormField>
        <UFileUpload v-model="state.file" icon="i-lucide-image" accept="image/*" label="Drop your image here" description="SVG, PNG, JPG or GIF (max. 2MB)" class="aspect-square mb-4" />
        <!-- <USelect v-model="visibilityVal" variant="soft" :items="visibility" value-key="value" :leading-icon="icon" class="w-40" /> -->
        <USelect v-model="value" variant="soft" :items="items" value-key="value" :icon="icon" class="w-40" />
      </UFormField>
      <UFormField>
        <UInput placeholder="Event Name" size="xl" :ui="{ base: 'rounded-none px-0' }" variant="ghost" class="text-3xl px-0" />
      </UFormField>
    </UForm>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloribus cum atque esse, explicabo exercitationem est dicta reiciendis. Minima, omnis veniam. Modi exercitationem soluta maxime necessitatibus odio. Corrupti, dolore sit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloribus cum atque esse, explicabo exercitationem est dicta reiciendis. Minima, omnis veniam. Modi exercitationem soluta maxime necessitatibus odio. Corrupti, dolore sit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloribus cum atque esse, explicabo exercitationem est dicta reiciendis. Minima, omnis veniam. Modi exercitationem soluta maxime necessitatibus odio. Corrupti, dolore sit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloribus cum atque esse, explicabo exercitationem est dicta reiciendis. Minima, omnis veniam. Modi exercitationem soluta maxime necessitatibus odio. Corrupti, dolore sit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloribus cum atque esse, explicabo exercitationem est dicta reiciendis. Minima, omnis veniam. Modi exercitationem soluta maxime necessitatibus odio. Corrupti, dolore sit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloribus cum atque esse, explicabo exercitationem est dicta reiciendis. Minima, omnis veniam. Modi exercitationem soluta maxime necessitatibus odio. Corrupti, dolore sit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloribus cum atque esse, explicabo exercitationem est dicta reiciendis. Minima, omnis veniam. Modi exercitationem soluta maxime necessitatibus odio. Corrupti, dolore sit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloribus cum atque esse, explicabo exercitationem est dicta reiciendis. Minima, omnis veniam. Modi exercitationem soluta maxime necessitatibus odio. Corrupti, dolore sit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloribus cum atque esse, explicabo exercitationem est dicta reiciendis. Minima, omnis veniam. Modi exercitationem soluta maxime necessitatibus odio. Corrupti, dolore sit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloribus cum atque esse, explicabo exercitationem est dicta reiciendis. Minima, omnis veniam. Modi exercitationem soluta maxime necessitatibus odio. Corrupti, dolore sit.</p>
  </section>
</template>
