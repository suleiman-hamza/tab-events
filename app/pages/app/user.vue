<script setup lang="ts">
const { user, session } = useAuth()
const { organizations } = useOrgs()

definePageMeta({
  middleware: ['auth'],
})
</script>

<template>
  <div class="flex flex-col bg-gray-900">
    <div class="flex flex-col sm:flex-row gap-4">
      <section class="border p-4 flex-1">
        <div>
          <h2>{{ user?.name }}</h2>
        </div>
        <div>
          <h3>{{ user?.email }}</h3>
        </div>
        <div class="mt-2 flex flex-wrap justify-center gap-2">
          <UBadge v-if="user?.emailVerified" color="success" variant="soft">
            Email verified
          </UBadge>
          <UBadge v-else color="warning" variant="soft">
            Email not verified
          </UBadge>
        </div>
        <div class="mt-4 w-full">
          <ul class="text-sm text-muted-foreground space-y-1">
            <li><span class="font-medium">ID:</span> {{ user?.id }}</li>
            <li><span class="font-medium">Created at:</span> {{ user?.createdAt }}</li>
            <li v-if="user?.updatedAt">
              <span class="font-medium">Updated at:</span> {{ user.updatedAt }}
            </li>
          </ul>
        </div>
      </section>
      <section class="border p-4 flex-1">
        <h2>Session</h2>
        <!-- <div>
          <h2>IP Address: {{ session?.ipAddress }}</h2>
        </div> -->
        <div>
          <h2>User Agent: {{ session?.userAgent }}</h2>
        </div>
      </section>
    </div>
  </div>
</template>
