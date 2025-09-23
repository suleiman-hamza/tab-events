<script setup lang="ts">
const { user } = useAuth()
const items = ref([
  [
    {
      label: user.value?.name,
      avatar: {
        src: user.value?.image || '',
        alt: user.value?.name || '',
      },
      type: 'label',
    },
  ],
  [
    {
      label: 'View Profile',
    },
    {
      label: 'Settings',
    },
    {
      label: 'Sign Out',
      icon: 'i-lucide-log-out',
    },
  ],
])
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Events">
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>
        <template #right>
          <UButton icon="i-lucide-bell" variant="soft" color="neutral" />
          <UPopover :content="{ align: 'end' }" :ui="{ content: 'bg-blue-950' }">
            <UButton :avatar="{ alt: user?.name }" variant="soft" color="neutral" />
            <template #content>
              <section class="w-40">
                <div class="flex gap-2 items-center p-3">
                  <UAvatar :alt="user?.name" />
                  <span class="truncate">
                    <h4>{{ user?.name }}</h4>
                    <h5 class="text-sm truncate">{{ user?.email }}</h5>
                  </span>
                </div>
                <USeparator />
                <div class="p-3">
                  <p>This is random stuff oo, like from the galaxy haha</p>
                </div>
              </section>
            </template>
          </UPopover>
        </template>
      </UDashboardNavbar>
    </template>
    <template #body>
      <section class="h-screen flex gap-4 border justify-center items-center">
        <div class="flex flex-col items-center gap-2 p-4 text-center">
          <Icon name="i-lucide-calendar" size="60" />
          <h3>No Upcoming Events</h3>
          <p>You have no upcoming events. Wanna host one?</p>
          <UButton label="Create Event" icon="i-lucide-plus" color="info" />
        </div>
      </section>
    </template>
  </UDashboardPanel>
</template>
