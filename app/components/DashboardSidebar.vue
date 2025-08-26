<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

defineProps<{
  collapsed?: boolean
}>()

const {
  isLoading,
  organization,
  organizations,
  selectTeam,
  fetchOrganizations,
  fetchCurrentOrganization,
} = useOrgs()

onMounted(async () => {
  if (organizations.value.length === 0) {
    await fetchOrganizations()
  }
  if (!organization.value) {
    await fetchCurrentOrganization()
  }
})

const items = computed<DropdownMenuItem[]>(() => {
  return [
    organizations.value?.map((team) => {
      return {
        label: team.name,
        avatar: {
          src: team.logo || '',
          alt: team.name || '',
        },
        onSelect() {
          selectTeam(team.id)
        },
      }
    }),
  ]
})
</script>

<template>
  <nav class="border-r h-screen">
    <UDropdownMenu
      :items="items" :content="{ align: 'center', collisionPadding: 12 }"
      :ui="{ content: collapsed ? 'w-40' : 'w-(--reka-dropdown-menu-trigger-width)' }"
    >
      <UButton label="Manage Team" color="neutral" variant="outline" trailing-icon="i-lucide-chevrons-up-down" />
    </UDropdownMenu>

    <h2>Home</h2>
    <h2>Home</h2>
    <h2>Home</h2>
    <h2>Home</h2>
    <h2>Setting</h2>
  </nav>
</template>
