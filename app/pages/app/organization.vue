<script setup lang="ts">
const { organizations, fetchOrganizations, isLoading } = useOrgs()

onMounted(async () => {
  if (organizations.value.length === 0) {
    await fetchOrganizations()
  }
})
</script>

<template>
  <div v-if="!isLoading" class="flex flex-col gap-2 mt-4">
    <div v-for="org in organizations" :key="org.id" class="border p-4">
      <div class="flex items-center gap-4">
        <h2>
          {{ org.name }}
        </h2>
        <span>
          <UButton label="Delete" trailing-icon="i-lucide-trash" />
        </span>
      </div>
    </div>
  </div>
</template>
