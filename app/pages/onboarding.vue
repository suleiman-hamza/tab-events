<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import * as z from 'zod'
const router = useRouter();
const auth = useAuth();
// onMounted(() => {
//   if (user.value?.name && !state.name) {
//     state.name = `${user.value.name}'s Team`
//   }
// })
definePageMeta({
  middleware: ['auth'],
  layout: 'auth'
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
  slug: undefined
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
      router.push("/"); // redirect to login page
    },
  },
  });
}
</script>

<template>
  <main>
    <section class="container mx-auto px-4 py-8 border">
      <!-- <p>{{ auth.user }}</p> -->
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusantium cum nulla nam maiores voluptatem in,
        asperiores fugiat architecto autem molestias voluptatum voluptate cumque porro repellat ipsam vero quas sint.
      </p>
      <UButton label="Sign Out" color="neutral" type="button" @click="signOut" loading-auto variant="outline"
        class="w-full rounded-none flex items-center justify-center" />
    </section>
  </main>
</template>
