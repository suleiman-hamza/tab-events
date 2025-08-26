<template>
  <main class="flex">
    <DashboardSidebar />
    <section class="flex-1 flex flex-col h-screen">
      <DashboardHeader />
      <div class="overflow-y-auto">
        <slot />
      </div>
    </section>
  </main>
</template>
