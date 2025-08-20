import { createAuthClient } from 'better-auth/client';

export function useAuth() {
    const url = useRequestURL();
    const headers = import.meta.server ? useRequestHeaders() : undefined;

    const client = createAuthClient({
        baseURL: url.origin,
        fetchOptions: {
            headers,
        }
    })

    return {
        client,
        signIn: client.signIn,
        signUp: client.signUp
    }
}