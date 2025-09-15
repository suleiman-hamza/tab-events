<script setup lang="ts">
const items = ref([
  {
    label: 'Sign in',
    slot: 'signin' as const,
    description: 'Enter your credentials to access your account.',
    content: 'This is the User Sign in content.',
    title: 'Login',
  },
  {
    label: 'Sign up',
    slot: 'signup' as const,
    description: 'Create an account to access your account.',
    content: 'This is the User Sign up content.',
    title: 'Sign up',
  },
])
</script>

<template>
  <section class="w-full">
    <header class="flex justify-between">
      <h2>Events</h2>
      <UTabs :items="items">
        <template>
          Tab 1
        </template>
        <template>Tab 2</template>
      </UTabs>
    </header>
  </section>
</template>
