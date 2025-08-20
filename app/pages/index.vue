<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import * as z from 'zod'

interface MyTabsItem {
  label: string
  slot: string
  description: string
  content: string
  title: string
}

definePageMeta({
  layout: 'auth',
})
const loading = ref(false)

const schema = z.object({
  email: z.email('Invalid email address').min(1, 'Email is required'),
  password: z.string().min(8, 'Must be at least 8 characters'),
  name: z.string().optional(),
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined,
  name: undefined,
})

const items = ref<MyTabsItem[]>([
  {
    label: 'Sign in',
    slot: 'signin' as const,
    description: 'Enter your credentials to access your account.',
    content: 'This is the User Sign in content.',
    title: 'Login',
  },
  {
    label: 'Sign up',
    slot: 'signup' as const,
    description: 'Create an account to access your account.',
    content: 'This is the User Sign up content.',
    title: 'Sign up',
  },
])

async function onSignIn(payload: FormSubmitEvent<Schema>) {
  try {
    loading.value = true
    // const { data, error } = await auth.signIn.email({
    //   email: payload.data.email,
    //   password: payload.data.password,
    // })
    // if (data) {
    //   toast.add({
    //     title: 'Successfully signed in',
    //     color: 'success',
    //   })

    //   await fetchOrganizations()
    //   await navigateTo('/app/user')
    // } else {
    //   toast.add({
    //     title: error.message,
    //     color: 'error',
    //   })
    // }
  }
  catch (error: any) {
    // toast.add({
    //   title: error.message,
    //   color: 'error',
    // })
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <div class="flex items-center justify-center gap-2 mt-4 mb-4">
      <UIcon name="i-lucide-lightbulb" class="size-5" />
      <span class="text-amber-600 font-bold text-2xl">App Logo</span>
    </div>

    <section class="relative p-4 border border-gray-300">
      <!-- crossed div -->
      <span class="cross absolute -bottom-px -left-px size-px" />
      <span class="cross absolute -bottom-px -right-px size-px" />
      <span class="cross absolute -left-px -top-px size-px" />
      <span class="cross absolute -right-px -top-px size-px" />
      <!-- crossed div -->
      <UTabs color="neutral" variant="link" :items class="">
        <template #signin="{ item }">
          <h3 class="text-2xl font-bold mt-4 mb-2">
            {{ item.title }}
          </h3>
          <p class="text-muted mb-4">
            {{ item.description }}
          </p>

          <UForm :state="state" class="flex flex-col gap-4">
            <UFormField label="Email" name="email">
              <UInput v-model="state.email" class="w-full !rounded-none ring-0 shadow-none inset-ring-0" trailing-icon="i-lucide-at-sign" placeholder="Enter your email" />
            </UFormField>
            <UFormField label="password" name="password">
              <UInput v-model="state.password" type="password" class="w-full !rounded-none" trailing-icon="i-lucide-lock" placeholder="Enter your password" />
            </UFormField>

            <UButton label="Continue" color="neutral" type="submit" variant="solid" class="w-full rounded-none flex items-center justify-center" />
          </UForm>
        </template>

        <template #signup="{ item }">
          <h3 class="text-2xl font-bold mt-4 mb-2">
            {{ item.title }}
          </h3>
          <p class="text-muted mb-4">
            {{ item.description }}
          </p>

          <UForm :state="state" class="flex flex-col gap-4">
            <UFormField label="Email" name="email">
              <UInput v-model="state.email" class="w-full !rounded-none" trailing-icon="i-lucide-at-sign" placeholder="Enter your email" />
            </UFormField>
            <UFormField label="password" name="password">
              <UInput v-model="state.password" type="password" class="w-full !rounded-none border-0" trailing-icon="i-lucide-lock" placeholder="Enter your password" />
            </UFormField>
            <UFormField label="Name" name="name">
              <UInput v-model="state.name" class="w-full rounded-none border-0" trailing-icon="i-lucide-at-profile" placeholder="Enter Fullname" />
            </UFormField>

            <UButton label="Continue" color="neutral" type="submit" variant="solid" class="w-full flex items-center justify-center rounded-none" />
          </UForm>
        </template>
      </UTabs>
    </section>
  </div>
</template>
