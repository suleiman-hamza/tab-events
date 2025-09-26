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
      </UForm>
    </UPageBody>
  </section>
</template>
