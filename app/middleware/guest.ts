export default defineNuxtRouteMiddleware((to, from) => {
  const { loggedIn } = useAuth()

  if (loggedIn.value) {
    return navigateTo('/app/user')
  }
})
