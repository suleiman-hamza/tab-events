<script setup lang="ts">
</script>

<template>
  <USeparator type="dashed" class="h-px border-indigo-400" />
  <footer class="flex flex-col-reverse items-center justify-center sm:flex-row gap-8 p-4 mt-4">
    <div class="">
      <p class="text-muted text-sm">
        Copyright © {{ new Date().getFullYear() }}
      </p>
    </div>

    <div class="flex gap-2">
      <UButton
        icon="i-lucide-workflow" color="neutral" variant="ghost"
        to="https://github.com/suleiman-hamza/tab-events.git" target="_blank" aria-label="GitHub branch"
      />
      <UButton
        icon="i-lucide-github" color="neutral" variant="ghost"
        to="https://github.com/suleiman-hamza" target="_blank" aria-label="GitHub"
      />
      <UButton
        icon="i-lucide-twitter" color="neutral" variant="ghost" to="https://x.com/thee_hamza001"
        target="_blank" aria-label="X"
      />
      <UButton
        icon="i-lucide-globe" color="neutral" variant="ghost"
        to="https://shshunt.vercel.app" target="_blank" aria-label="Portfolio"
      />
    </div>
  </footer>
</template>
