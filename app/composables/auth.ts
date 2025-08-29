import type { ClientOptions, InferSessionFromClient, InferUserFromClient } from 'better-auth/client'
import { createAuthClient } from 'better-auth/client'
import { organizationClient } from 'better-auth/client/plugins'

export function useAuth() {
  const url = useRequestURL()
  const headers = import.meta.server ? useRequestHeaders() : undefined

  const client = createAuthClient({
    baseURL: url.origin,
    fetchOptions: {
      headers,
    },
    // client side plugins can be added here
    plugins: [
      organizationClient(),
    ],
  })
  const session = useState<InferSessionFromClient<ClientOptions> | null>('auth:session', () => null)
  const user = useState<InferUserFromClient<ClientOptions> | null>('auth:user', () => null)
  const sessionFetching = import.meta.server ? ref(false) : useState('auth:sessionFetching', () => false)
  const activeOrganizationId = useCookie('active-organization-id')

  const fetchSession = async () => {
    if (sessionFetching.value)
      return
    sessionFetching.value = true
    try {
      const { data } = await client.getSession({
        fetchOptions: {
          headers,
        },
      })
      session.value = data?.session || null
      user.value = data?.user || null
      return data
    }
    catch (error) {
      console.error('Error fetching session:', error)
      session.value = null
      user.value = null
    }
    finally {
      sessionFetching.value = false
    }
  }

  // if (import.meta.client) {
  //   client.$store.listen('$sessionSignal', async (signal) => {
  //     if (!signal) return
  //     await fetchSession()
  //   })
  // }

  return {
    client,
    signIn: client.signIn,
    signUp: client.signUp,
    session,
    sessionFetching,
    user,
    fetchSession,
    async signOut() {
      const { clearState } = useOrgs()
      if (!user.value) {
        clearState()
        await navigateTo('/')
        return
      }

      const res = await client.signOut()
      session.value = null
      user.value = null
      activeOrganizationId.value = null
      clearState()
      await navigateTo('/')
      return res
    },
    loggedIn: computed(() => !!session.value),
  }
}
