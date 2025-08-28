<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'
import { CreateOrgModal } from '#components'

const {
  isLoading,
  organization,
  organizations,
  selectTeam,
  fetchOrganizations,
  fetchCurrentOrganization,
} = useOrgs()

const overlay = useOverlay()

const modal = overlay.create(CreateOrgModal)

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
    [
      {
        label: 'Create Organization',
        icon: 'i-lucide-circle-plus',
        onSelect: () => {
          modal.open()
        },
      },
      {
        label: 'Manage Organizations',
        icon: 'i-lucide-cog',
        to: '/app/teams',
      },
    ],
  ]
})
</script>

<template>
  <UDropdownMenu
    :items="items" :content="{ align: 'center', collisionPadding: 12 }"
    :ui="{ content: 'w-(--reka-dropdown-menu-trigger-width)' }"
    class="rounded-none w-full border border-amber-600 bg-white"
  >
    <UButton :label="organization?.name" trailing-icon="i-lucide-chevrons-up-down" color="neutral" variant="outline" class="rounded-none w-full border border-amber-600 flex justify-between" />
  </UDropdownMenu>
</template>
