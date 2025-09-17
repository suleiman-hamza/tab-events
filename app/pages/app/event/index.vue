<script setup lang="ts">
const items = [
  [
    {
      label: 'My Events',
    },
  ],
  [

    {
      label: 'Upcoming',
      value: 'all',
      slot: 'all' as const,
      description: 'Change your password here. After saving, you\'ll be logged out.',
    },
    {
      label: 'Past',
      value: 'unread',
      slot: 'unread' as const,
      description: 'Make changes to your account here. Click save when you\'re done.',
    },
  ],
]
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Event">
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>
        <template #right>
          <UButton icon="i-lucide-user" variant="soft" color="neutral" />
          <UButton icon="i-lucide-bell" variant="soft" color="neutral" />
        </template>
      </UDashboardNavbar>
      <UDashboardToolbar>
        <UNavigationMenu :items="items" highlight class="flex-1" />
      </UDashboardToolbar>
    </template>
  </UDashboardPanel>
</template>
