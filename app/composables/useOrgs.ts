import type { FormSubmitEvent } from '@nuxt/ui'
import type { Organization } from 'better-auth/plugins'
import type { createTeamsSchema, FullOrganization } from '../../shared/types/organization'

export function useCurrentOrganization() {
  return useState<Organization | null>('organization', () => null)
}

export function useOrgs() {
  const toast = useToast()
  const { client } = useAuth()
  const organization = useCurrentOrganization()
  const activeOrganizationId = useCookie('active-organization-id')

  const isLoading = useState('orgs-loading', () => false)
  const organizations = useState<FullOrganization[]>('organizations', () => []) // shows orgs list[]

  // function gets full details of an org, when you pass in a slug/id
  async function getFullOrganization(orgId?: string) {
    if (!orgId) {
      const { data, error } = await client.organization.getFullOrganization()
      if (error) {
        toast.add({
          title: 'Failed to fetch organization',
          color: 'error',
        })
      }
      return data
    }

    const { data, error } = await client.organization.getFullOrganization({
      query: { organizationId: orgId },
    })

    if (error) {
      toast.add({
        title: 'Failed to fetch organizations',
        color: 'error',
      })
    }
    return data
  }

  async function fetchCurrentOrganization() {
    if (!activeOrganizationId.value)
      return null
    organization.value = await getFullOrganization(activeOrganizationId.value)
    return organization.value
  }

  async function selectTeam(id: string) {
    const { data, error } = await client.organization.setActive({
      organizationId: id,
    })

    activeOrganizationId.value = id
    await fetchCurrentOrganization()

    if (data) {
      toast.add({
        title: 'Team selected',
        color: 'success',
      })
    }
  }

  // fetch organizations that the user is a member of
  // Get all orgs the user is a member of, with detailed info
  async function fetchOrganizations() {
    if (isLoading.value)
      return organizations.value
    isLoading.value = true

    try {
      const { data, error } = await client.organization.list() // list orgs a user is a member of

      if (error) {
        toast.add({
          title: 'Failed to fetch organizations',
          color: 'error',
        })
        return organizations.value
      }

      const fullOrgs = await Promise.all(
        data!.map(org => getFullOrganization(org.id)),
      ) as FullOrganization[]

      organizations.value = fullOrgs
      return fullOrgs
    }
    finally {
      isLoading.value = false
    }
  }

  async function createOrganization(event: FormSubmitEvent<createTeamsSchema>) {
    const { data, error } = await client.organization.create({
      name: event.data.name, // required
      slug: event.data.slug, // required
      logo: event.data.logo,
      // metadata,
      // keepCurrentActiveOrganization: false,
    })

    if (error) {
      toast.add({
        title: 'Failed to create team',
        color: 'error',
      })
      return false
    }

    await fetchOrganizations()
    if (data) {
      await selectTeam(data.id)
    }
    return true
  }

  async function deleteOrganization(orgId: string) {
    const { data, error } = await client.organization.delete({
      organizationId: orgId,
    })

    if (error) {
      toast.add({
        title: 'Failed to delete Organization',
        color: 'error',
      })
    }

    if (data) {
      toast.add({
        title: 'Organization Deleted',
        color: 'success',
      })
    }

    // Clear the cookie if the deleted org was active
    if (activeOrganizationId.value === orgId) {
      activeOrganizationId.value = null
    }

    await fetchOrganizations()
  }

  function clearState() {
    activeOrganizationId.value = null
    organizations.value = []
    organization.value = null
  }

  return {
    organization,
    organizations,
    getFullOrganization,
    fetchCurrentOrganization,
    isLoading,
    fetchOrganizations,
    createOrganization,
    activeOrganizationId,
    selectTeam,
    deleteOrganization,
    clearState,
  }
}
