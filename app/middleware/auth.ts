export default defineNuxtRouteMiddleware(async(to, from) => {
//   const { loggedIn } = useAuth();
//   if (!loggedIn.value) {
//     console.log(loggedIn.value)
//     return navigateTo('/')
//   }

const { session, fetchSession } = useAuth()

  if (!session.value) {
    await fetchSession() // will use cookie if available
  }

  if (!session.value) {
    return navigateTo('/')
  }
})