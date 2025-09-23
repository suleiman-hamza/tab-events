<script setup lang="ts">
const { signOut, user } = useAuth()

const items = ref([
  {
    label: 'Dashboard',
    icon: 'i-lucide-home',
    to: '/app/user',
  },
  {
    label: 'Events',
    icon: 'i-lucide-calendar',
    to: '/app/event',
  },
  {
    label: 'Organizations',
    icon: 'i-lucide-users',
    to: '/app/organization',
  },
  {
    label: 'Discover',
    icon: 'i-lucide-mail',
    to: '/app/discover',
  },
  {
    label: 'Settings',
    icon: 'i-lucide-user-cog',
    children: [
      {
        label: 'Preferences',
        to: '/app/settings',
      },
      {
        label: 'Security',
        to: '/app/settings/security',
      },
      {
        label: 'Appearance',
        to: '/app/settings/appearance',
      },
    ],
  },
  {
    label: 'Help & Support',
    icon: 'i-lucide-help-circle',
    to: '/app/support',
    children: [
      {
        label: 'Documentation',
        to: '/app/support/docs',
      },
      {
        label: 'Contact Support',
        to: '/app/support/contact',
      },
    ],
  },
])
</script>

<template>
  <UDashboardGroup class="flex">
    <UDashboardSidebar
      id="default"
      collapsible
      resizable
      class="bg-elevated/25"
      :ui="{ footer: 'lg:border-t lg:border-default' }"
    >
      <template #header="{ collapsed }">
        <OrgsMenu :collapsed />
      </template>

      <template #default="{ collapsed }">
        <UNavigationMenu
          orientation="vertical" popover highlight highlight-color="primary"
          :items="items"
          :collapsed
          class=""
        />
      </template>

      <template #footer="{ collapsed }">
        <UButton
          :label="collapsed ? undefined : 'Log out'"
          icon="i-lucide-log-out"
          color="neutral" type="button" loading-auto variant="outline"
          class="w-full rounded-none flex items-center justify-center" @click="signOut()"
        />
      </template>
    </UDashboardSidebar>
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
        <slot />
      </template>
    </UDashboardPanel>
  </UDashboardGroup>
</template>
