<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import * as z from 'zod'

const auth = useAuth();

definePageMeta({
  middleware: ['auth'],
  layout: 'auth'
})
</script>

<template>
  <main>
    <section class="container mx-auto px-4 py-8 border">
     
    </section>
  </main>
</template>
