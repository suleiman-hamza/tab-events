<script setup lang="ts">
const { organizations, fetchOrganizations, isLoading, deleteOrganization } = useOrgs()

onMounted(async () => {
  if (organizations.value.length === 0) {
    await fetchOrganizations()
  }
})
</script>

<template>
  <div v-if="!isLoading" class="flex flex-col gap-2 mt-4">
    <div v-for="org in organizations" :key="org.id" class="border p-4">
      <div class="flex items-start justify-between">
        <div class="flex flex-col gap-4">
          <h2 class="text-2xl leading-none">
            {{ org.name }}
          </h2>
          <UAvatarGroup :max="2">
            <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" />
            <UAvatar src="https://github.com/romhml.png" alt="Romain Hamel" />
            <UAvatar src="https://github.com/noook.png" alt="Neil Richter" />
          </UAvatarGroup>
        </div>
        <span>
          <UButton label="Delete" trailing-icon="i-lucide-trash" @click="deleteOrganization(org.id)" />
        </span>
      </div>
    </div>
  </div>
</template>
