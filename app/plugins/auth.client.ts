import { createAuthClient } from "better-auth/vue"
export default defineNuxtPlugin(async () => {
    // export const authClient = useAuth().client;
  const { session, fetchSession } = useAuth()
  
  if (!session.value && import.meta.client) {
    await fetchSession()
  }
})