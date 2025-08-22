import type { Organization, Member } from 'better-auth/plugins'
const { client } = useAuth();
const toast = useToast();

export const useCurrentOrganization = () => {
    return useState<Organization | null>('organization', () => null)
}

export function useOrgs() {
    const { client } = useAuth()
    const organization = useCurrentOrganization()
    const activeOrganizationId = useCookie('active-organization-id')

    async function createOrganization() {
        const { data, error } = await client.organization.create({
            name: "My Organization", // required
            slug: "my-org", // required
            logo: "https://example.com/logo.png",
            // metadata,
            // keepCurrentActiveOrganization: false,
        });

        if (error) {
            toast.add({
                title: 'Failed to create team',
                color: 'error'
            })
            return false
        } else {
            toast.add({
                title: 'Team created',
                color: 'success'
            })
            return true
        }
    }

    return {
        createOrganization,
        organization,
        activeOrganizationId,
    }
}