<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent, TabsItem } from '@nuxt/ui'

definePageMeta({
  layout: "auth"
})
const loading = ref(false)

const schema = z.object({
  email: z.email('Invalid email address').min(1, 'Email is required'),
  password: z.string().min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined
})

const items = ref<TabsItem[]>([
  {
    label: 'Sign in',
    slot: 'signin',
    icon: 'i-lucide-user',
    content: 'This is the User Sign in content.'
  },
  {
    label: 'Sign up',
    slot: 'signin',
    icon: 'i-lucide-user',
    content: 'This is the User Sign up content.'
  }
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
  } catch (error: any) {
    // toast.add({
    //   title: error.message,
    //   color: 'error',
    // })
  } finally {
    loading.value = false
  }
}

</script>

<template>
  <div class="border flex flex-col items-center justify-center gap-4 p-4">
    <div class="border border-amber-600 flex items-center justify-center gap-2">
      <UIcon name="i-lucide-lightbulb" class="size-5" />
      <span class="text-amber-600 font-bold text-2xl">App Slot</span>
    </div>

    <section class="relative p-4 border border-gray-300">
      <!--crossed div-->
      <span class="cross absolute -bottom-px -left-px size-px" />
      <span class="cross absolute -bottom-px -right-px size-px" />
      <span class="cross absolute -left-px -top-px size-px" />
      <span class="cross absolute -right-px -top-px size-px" />
      <!--crossed div-->
      <UTabs color="neutral" variant="link" :items="items">
        <template #signin>
          <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSignIn">
            <UFormField label="Email" name="email">
              <UInput v-model="state.email" />
            </UFormField>

            <UFormField label="Password" name="password">
              <UInput v-model="state.password" type="password" />
            </UFormField>

            <UButton type="submit">
              Submit
            </UButton>
          </UForm>
        </template>

        <template #signup>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam molestias fugit dolorem architecto esse eius ea optio tempore atque eum voluptatum laudantium hic iste odit, assumenda, doloribus sequi vero explicabo!</p>
        </template>
      </UTabs>
    </section>
  </div>
</template>
