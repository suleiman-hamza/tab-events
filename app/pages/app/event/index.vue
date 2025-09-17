<script setup lang="ts">
const items = [
  [
    {
      label: 'My Events',
    },
  ],
  [

    {
      label: 'Upcoming',
      to: '/app/event/upcoming',
    },
    {
      label: 'Past',
      to: '/app/event/past',
    },
  ],
]

const itemsTab = ref([
  {
    label: 'Account',
    icon: 'i-lucide-user',
    content: 'This is the account content.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel reprehenderit quasi nemo officia laborum. Obcaecati, temporibus? Laudantium ad ullam magnam, nesciunt praesentium saepe, expedita veritatis sunt maiores a pariatur hic!Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel reprehenderit quasi nemo officia laborum. Obcaecati, temporibus? Laudantium ad ullam magnam, nesciunt praesentium saepe, expedita veritatis sunt maiores a pariatur hic!Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel reprehenderit quasi nemo officia laborum. Obcaecati, temporibus? Laudantium ad ullam magnam, nesciunt praesentium saepe, expedita veritatis sunt maiores a pariatur hic!Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel reprehenderit quasi nemo officia laborum. Obcaecati, temporibus? Laudantium ad ullam magnam, nesciunt praesentium saepe, expedita veritatis sunt maiores a pariatur hic!Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel reprehenderit quasi nemo officia laborum. Obcaecati, temporibus? Laudantium ad ullam magnam, nesciunt praesentium saepe, expedita veritatis sunt maiores a pariatur hic!Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel reprehenderit quasi nemo officia laborum. Obcaecati, temporibus? Laudantium ad ullam magnam, nesciunt praesentium saepe, expedita veritatis sunt maiores a pariatur hic!Lorem ipsum dolor sit amet consectetur adipisicing elit. 0Vel reprehenderit quasi nemo officia laborum. Obcaecati, temporibus? Laudantium ad ullam magnam, nesciunt praesentium saepe, expedita veritatis sunt maiores a pariatur hic!Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel reprehenderit quasi nemo officia laborum. Obcaecati, temporibus? Laudantium ad ullam magnam, nesciunt praesentium saepe, expedita veritatis sunt maiores a pariatur hic!Vel reprehenderit quasi nemo officia laborum. Obcaecati, temporibus? Laudantium ad ullam magnam, nesciunt praesentium saepe, expedita veritatis sunt maiores a pariatur hic!Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel reprehenderit quasi nemo officia laborum. Obcaecati, temporibus? Laudantium ad ullam magnam, nesciunt praesentium saepe, expedita veritatis sunt maiores a pariatur hic!Vel reprehenderit quasi nemo officia laborum. Obcaecati, temporibus? Laudantium ad ullam magnam, nesciunt praesentium saepe, expedita veritatis sunt maiores a pariatur hic!Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel reprehenderit quasi nemo officia laborum. Obcaecati, temporibus? Laudantium ad ullam magnam, nesciunt praesentium saepe, expedita veritatis sunt maiores a pariatur hic!Vel reprehenderit quasi nemo officia laborum. Obcaecati, temporibus? Laudantium ad ullam magnam, nesciunt praesentium saepe, expedita veritatis sunt maiores a pariatur hic!Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel reprehenderit quasi nemo officia laborum. Obcaecati, temporibus? Laudantium ad ullam magnam, nesciunt praesentium saepe, expedita veritatis sunt maiores a pariatur hic!',
  },
  {
    label: 'Password',
    icon: 'i-lucide-lock',
    content: 'This is the password content.',
  },
])
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Event">
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>
        <template #right>
          <UButton icon="i-lucide-user" variant="soft" color="neutral" />
          <UButton icon="i-lucide-bell" variant="soft" color="neutral" />
        </template>
      </UDashboardNavbar>
    </template>
    <template #body>
      <UTabs
        :items="itemsTab" class="w-full"
        :ui="{ trigger: 'border border-red-500', list: 'border-2 border-amber-700 w-40 ml-auto' }"
      />
    </template>
  </UDashboardPanel>
</template>
