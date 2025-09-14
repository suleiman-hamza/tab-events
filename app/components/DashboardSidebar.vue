<script setup lang="ts">
const { signOut } = useAuth()
</script>

<template>
  <nav class="border-r h-screen flex flex-col justify-between">
    <OrgsMenu />
    <div class="border flex flex-col gap-1">
      <NuxtLink to="/app/event">
        Event
      </NuxtLink>
      <NuxtLink to="/app/organization">
        Organizations
      </NuxtLink>
      <NuxtLink to="/app/invite">
        Invites
      </NuxtLink>
    </div>
    <UButton
      color="neutral" type="button" loading-auto variant="outline"
      class="w-full rounded-none flex items-center justify-center" @click="signOut()"
    >
      Sign out
    </UButton>
  </nav>
</template>
