<script setup lang="ts">
const state = reactive({
  name: undefined,
})

const items = ref([
  {
    label: 'public',
  },
  {
    label: 'private',
  },
])
</script>

<template>
  <section>
    <UPageBody :ui="{ content: 'border' }">
      <UForm :state>
        <UFormField label="Name" name="name">
          <UFileUpload :ui="{ root: 'w-40 border-amber-400' }" />
        </UFormField>
        <UFormField>
          <USelect :items="items" leading-icon="i-lucide-globe" class="w-40" />
        </UFormField>
        <UFormField>
          <UInput placeholder="Event Name" size="xl" :ui="{ base: 'rounded-none px-0' }" variant="ghost" class="text-3xl px-0" />
        </UFormField>
      </UForm>
    </UPageBody>
  </section>
</template>
