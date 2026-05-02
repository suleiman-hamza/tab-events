<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: ['auth', 'onboarding'],
})
</script>

<template>
  <NuxtPage />
</template>
