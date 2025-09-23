<script setup lang="ts">

</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Events">
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>
        <template #right>
          <UButton icon="i-lucide-user" variant="soft" color="neutral" />
          <UButton icon="i-lucide-bell" variant="soft" color="neutral" />
        </template>
      </UDashboardNavbar>
    </template>
    <template #body>
      <section class="h-screen flex gap-4 border justify-center items-center">
        <div class="border flex flex-col items-center gap-2 p-4">
          <Icon name="i-lucide-calendar" size="60" />
          <h3>No Upcoming Events</h3>
          <p>You have no upcoming events. Wanna host one?</p>
          <UButton label="Create Event" icon="i-lucide-plus" color="info" />
        </div>
      </section>
    </template>
  </UDashboardPanel>
</template>
