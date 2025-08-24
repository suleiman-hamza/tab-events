<script setup lang="ts">
const auth = useAuth()
const router = useRouter()

definePageMeta({
  middleware: ['auth'],
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
  <div class="min-h-screen flex flex-col justify-center items-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <!-- <img class="mx-auto h-12 w-auto" src="/logo.png" alt="Your Company" /> -->
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-300">
          Create Your Team
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Or
          <!-- <a href="#" @click.prevent="signOut" class="font-medium text-indigo-600 hover:text-indigo-500">
            sign out to use a different account
          </a> -->
        </p>
      </div>

      <div class="text-center text-sm text-muted-foreground">
        By creating a team, you agree to our
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Terms of Service</a> and
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Privacy Policy</a>.
      </div>

      <UButton
        color="neutral" type="button" loading-auto variant="outline" class="w-full rounded-none flex items-center justify-center"
        @click="signOut"
      >
        Sign out
      </UButton>
    </div>
  </div>
</template>
