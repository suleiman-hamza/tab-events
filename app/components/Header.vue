<script setup lang="ts">
</script>

<template>
  <nav class="p-4 border-b border-dashed">
    <div class="container mx-auto flex justify-between items-center">
      <NuxtLink to="/">
        <img src="/images/logo_svg.svg" alt="app logo svg" class="h-6 w-6">
      </NuxtLink>

      <div class="flex gap-2 border">
        <NuxtLink to="/">
          <span>Work</span>
        </NuxtLink>
        <NuxtLink to="/">
          <span>Contact</span>
        </NuxtLink>
        <NuxtLink to="/">
          <span>Book Demo</span>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
