<script setup lang="ts">
import type { SelectItem } from '@nuxt/ui'
// import { DateFormatter } from '@internationalized/date'

// const df = new DateFormatter('en-US', {
//   dateStyle: 'medium'
// })

const state = reactive({
  name: undefined,
  file: undefined,
  visibility: undefined,
  date: { start: undefined, end: undefined },
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
        <UInput placeholder="Event Name" size="xl" :ui="{ base: 'rounded-none px-0' }" variant="none" class="px-0" />
        <div class="border border-blue-600 p-2">
          <UPopover>
            <UButton>
              Start Date
            </UButton>
            <template #content>
              <UCalendar v-model="state.date.start" />
            </template>
          </UPopover>
          <UPopover>
            <UButton>
              End Date
            </UButton>
            <template #content>
              <UCalendar v-model="state.date.end" />
            </template>
          </UPopover>
        </div>
      </UFormField>
    </UForm>
    <h2 class="text-rose-500">
      {{ state.date }}
    </h2>
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
