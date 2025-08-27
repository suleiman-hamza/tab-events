<script setup lang="ts">
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from 'reka-ui'
</script>

<template>
  <SplitterGroup class="flex" direction="horizontal">
    <SplitterPanel :min-size="10" :max-size="25" :default-size="20" as-child>
      <DashboardSidebar class="p-4" />
    </SplitterPanel>

    <SplitterResizeHandle />

    <SplitterPanel as-child>
      <section class="flex flex-col h-screen">
        <DashboardHeader />
        <div class="overflow-y-auto p-4 sm:p-6">
          <slot />
        </div>
      </section>
    </SplitterPanel>
  </SplitterGroup>
</template>
