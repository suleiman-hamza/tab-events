<script setup lang="ts">
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from 'reka-ui'

const auth = useAuth()
const { fetchOrganizations } = useOrgs()
const router = useRouter()

const activeOrganization = await fetchOrganizations()

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
        <div>
          <h2>Active organization</h2>
          <pre>
            {{ activeOrganization }}
          </pre>
        </div>
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
      <div class="w-full h-64 px-8 md:px-16 text-green9 font-semibold text-sm border">
        <SplitterGroup
          id="splitter-group-1"
          direction="horizontal"
        >
          <SplitterPanel
            id="splitter-group-1-panel-1"
            :min-size="20"
            class="bg-white border rounded-xl flex items-center justify-center"
          >
            Panel A
          </SplitterPanel>
          <SplitterResizeHandle
            id="splitter-group-1-resize-handle-1"
            class="w-2"
          />
          <SplitterPanel
            id="splitter-group-1-panel-2"
            :min-size="20"
          >
            <SplitterGroup
              id="splitter-group-2"
              direction="vertical"
            >
              <SplitterPanel
                id="splitter-group-2-panel-1"
                :min-size="20"
                class="bg-green-200 border rounded-xl flex items-center justify-center"
              >
                Panel B
              </SplitterPanel>
              <SplitterResizeHandle
                id="splitter-group-2-resize-handle-1"
                class="h-2"
              />
              <SplitterPanel
                id="splitter-group-2-panel-2"
                :min-size="20"
                class="bg-red-500 border rounded-xl flex items-center justify-center"
              >
                Panel C
              </SplitterPanel>
            </SplitterGroup>
          </SplitterPanel>
        </SplitterGroup>
      </div>

      <div class="border border-emerald-400">
        <SplitterGroup direction="horizontal">
          <SplitterPanel class="bg-blue-700 text-2xl text-white p-6" :min-size="20">
            A
          </SplitterPanel>
          <SplitterResizeHandle />
          <SplitterPanel class="bg-rose-400 text-2xl text-white p-6" :min-size="10">
            B
          </SplitterPanel>
        </SplitterGroup>
      </div>

      <div class="text-center text-sm text-muted-foreground">
        By creating a team, you agree to our
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Terms of Service</a> and
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Privacy Policy</a>.
      </div>

      <UButton
        color="neutral" type="button" loading-auto variant="outline"
        class="w-full rounded-none flex items-center justify-center" @click="signOut"
      >
        Sign out
      </UButton>
    </div>
  </div>
</template>
