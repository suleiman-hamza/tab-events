<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const { signOut } = useAuth()

const items = ref<NavigationMenuItem[]>([
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
  <nav class="border-r h-screen flex flex-col">
    <OrgsMenu />
    <UNavigationMenu
      orientation="vertical" popover collapsed highlight highlight-color="primary" :items="items"
      class="data-[orientation=vertical]:w-48"
    />

    <UButton
      color="neutral" type="button" loading-auto variant="outline"
      class="w-full rounded-none flex items-center justify-center" @click="signOut()"
    >
      Sign out
    </UButton>
  </nav>
</template>
