<script setup lang="ts">
const items = [
  [
    {
      label: 'Events',
    },
  ],
  [

    {
      label: 'All',
      value: 'all',
      slot: 'all' as const,
      description: 'Change your password here. After saving, you\'ll be logged out.',
    },
    {
      label: 'Unread',
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
      <UDashboardToolbar>
        <UNavigationMenu :items="items" highlight class="flex-1" />
      </UDashboardToolbar>
    </template>
  </UDashboardPanel>
</template>
