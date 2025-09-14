<script setup lang="ts">
const profileItems = ref([
  {
    label: 'Dashboard',
    icon: 'i-lucide-circle-plus',
  },
  {
    label: 'Setting',
    icon: 'i-lucide-cog',
  },
])
</script>

<template>
  <nav class="border w-full border-red-500 h-auto p-3 flex justify-between items-center">
    <h2>Home</h2>
    <div class="flex gap-4">
      <UButton icon="i-lucide-search" variant="soft" class="flex items-center justify-center rounded-full w-10 h-10" />
      <UButton icon="i-lucide-bell" variant="soft" class="flex items-center justify-center rounded-full w-10 h-10" />
      <UDropdownMenu :items="profileItems">
        <UButton label="P" variant="soft" class="flex items-center justify-center rounded-full w-10 h-10" />
      </UDropdownMenu>
    </div>
  </nav>
</template>
