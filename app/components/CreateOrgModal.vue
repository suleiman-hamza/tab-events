<script setup lang="ts">
import type { createTeamsSchema } from '#imports'
import type { FormSubmitEvent } from '@nuxt/ui'

const emit = defineEmits<{ close: [boolean] }>()
const { createOrganization } = useOrgs()
const toast = useToast()

const state = reactive<Partial<createTeamsSchema>>({
  name: undefined,
  slug: undefined,
  logo: undefined,
})

async function Create(event: FormSubmitEvent<createTeamsSchema>) {
  await createOrganization(event)
  emit('close', true)
}
</script>

<template>
  <UModal>
    <UButton label="Open" color="neutral" variant="subtle" />

    <template #content>
      <section>
        <UForm :state :schema="createTeamSchema" @submit="Create">
          <UFormField label="Organizations Name" name="orgsName">
            <UInput v-model="state.name" />
          </UFormField>
          <UFormField label="Organizations Slug" name="slug">
            <UInput v-model="state.slug" />
          </UFormField>
          <UFormField label="Logo" name="orgsLogo">
            <UInput v-model="state.logo" />
          </UFormField>
          <UButton type="submit">
            Submit
          </UButton>
        </UForm>
      </section>
    </template>
  </UModal>
</template>
