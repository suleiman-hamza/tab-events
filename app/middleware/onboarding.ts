export default defineNuxtRouteMiddleware(async (to) => {
  const { loggedIn } = useAuth()

  if (!loggedIn.value) {
    return navigateTo('/auth')
  }

  if (to.path !== '/onboarding') {
    const { organizations, isLoading, fetchOrganizations } = useOrgs()

    if (organizations.value.length === 0 && !isLoading.value) {
      await fetchOrganizations()
    }

    if (!organizations.value || organizations.value.length === 0) {
      return navigateTo('/onboarding')
    }
  }
})
