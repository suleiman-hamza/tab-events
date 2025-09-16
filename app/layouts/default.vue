<script setup lang="ts">
const { signOut } = useAuth()

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
    label: 'Invites',
    icon: 'i-lucide-mail',
    to: '/app/invite',
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
        to: '/app/user/notifications',
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
    <section class="w-full flex flex-col">
      <UDashboardPanel id="inbox-1" resizable>
        <template #header>
          <UDashboardNavbar title="Home">
            <template #leading>
              <UDashboardSidebarCollapse />
            </template>
          </UDashboardNavbar>
        </template>
        <template #body>
          <slot />
        </template>
      </UDashboardPanel>
    </section>
  </UDashboardGroup>
</template>
