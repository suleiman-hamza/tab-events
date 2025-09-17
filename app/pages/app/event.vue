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
      to: '/app/event/upcoming',
    },
    {
      label: 'Past',
      to: '/app/event/past',
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
    <template #body>
      <div class="flex flex-col gap-4 sm:gap-6 lg:gap-12 w-full lg:max-w-2xl mx-auto overflow-auto">
        <NuxtPage />
      </div>
    </template>
  </UDashboardPanel>
</template>
