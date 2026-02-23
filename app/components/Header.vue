<script setup lang="ts">
</script>

<template>
  <nav class="p-4 border-b border-dashed">
    <div class="container mx-auto flex justify-between items-center">
      <NuxtLink to="/">
        <img src="/images/logo_svg.svg" alt="app logo svg" class="h-6 w-6">
      </NuxtLink>

      <div class="sm:flex sm:gap-4 text-secondary hidden">
        <NuxtLink to="/">
          <span>Work</span>
        </NuxtLink>
        <NuxtLink to="/">
          <span>Contact</span>
        </NuxtLink>
        <NuxtLink to="/auth">
          <span>Login</span>
        </NuxtLink>
      </div>

      <div>
        <UButton class="rounded-none" variant="outline">
          <UIcon name="i-lucide-menu" />
        </Ubutton>
      </div>
    </div>
  </nav>
</template>
