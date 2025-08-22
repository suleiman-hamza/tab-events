<script setup lang="ts">
import * as z from 'zod'

const router = useRouter()
const auth = useAuth()
const { user } = useAuth()

onMounted(() => {
  if (user.value?.name && !state.name) {
    state.name = `${user.value.name}'s Team`
  }
})
definePageMeta({
  middleware: ['auth'],
  layout: 'auth',
})

// const { createTeam, isLoading } = useOrgs()
const toast = useToast()

const schema = z.object({
  name: z.string().min(1, 'Team name is required'),
  slug: z.string().min(1, 'Team slug is required').regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  name: undefined,
  slug: undefined,
})

watch(() => state.name, (newName) => {
  if (newName && !state.slug) {
    state.slug = newName.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
  }
})

async function signOut() {
  await auth.client.signOut({
    fetchOptions: {
      onSuccess: () => {
        router.push('/') // redirect to login page
      },
    },
  })
}
</script>

<template>
  <main>
    <!-- <UButton color="neutral" type="button" @click="signOut" loading-auto variant="outline"
        class="w-full rounded-none flex items-center justify-center">
        Sign out
      </UButton> -->

    <div class="flex-1 flex flex-col items-center justify-center gap-4 p-4">
      <section class="relative w-full max-w-md bg-muted/20 border p-6">
        <div class="text-center border  mb-4">
          <span class="block w-20 h-20 border mx-auto mb-4" />
          <h1 class="text-2xl font-bold">
            Welcome to the app!
          </h1>
          <p class="text-muted-foreground mt-2">
            Let's create your first team to get started.
          </p>
        </div>

        <UForm :schema :state class="flex flex-col gap-4" @submit="">
          <UFormField label="Team Name" name="name" required>
            <UInput v-model="state.name" class="w-full" placeholder="e.g. My Awesome Team" />
          </UFormField>

          <UFormField label="Team Slug" name="slug" required>
            <UInput v-model="state.slug" class="w-full" placeholder="e.g. my-awesome-team" />

            This will be used in URLs and must be unique.
          </UFormField>

          <UButton
            type="submit"
            label="Create Team"
            block
            size="lg"
            class="mt-4"
          />
        </UForm>

        <div class="text-center text-sm text-muted-foreground">
          You can create additional teams later from the teams menu.
        </div>
      </section>
    </div>
  </main>
</template>
