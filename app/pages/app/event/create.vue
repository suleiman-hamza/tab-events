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
    <UPageBody>
      <UForm :state>
        <UFormField label="Name" name="name">
          <UFileUpload />
        </UFormField>
        <UFormField>
          <UDropdownMenu :items="items">
            <UButton label="Public" />
          </UDropdownMenu>
        </UFormField>
      </UForm>
    </UPageBody>
  </section>
</template>
