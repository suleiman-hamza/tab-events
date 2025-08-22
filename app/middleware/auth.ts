export default defineNuxtRouteMiddleware(async(to, from) => {
  const { loggedIn } = useAuth();
  if (!loggedIn.value) {
    console.log(loggedIn.value)
    return navigateTo('/')
  }
})