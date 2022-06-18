import { PublicConfiguration } from 'swr/dist/types'
import { authApi } from '../api-client'
import useSWR from 'swr'
export function useAuth(options?: Partial<PublicConfiguration>) {
  // profile
  //

  const {
    data: profile,
    error,
    mutate,
  } = useSWR('/profile', {
    dedupingInterval: 60000,
    revalidateOnFocus: false,
    ...options,
  })

  async function login() {
    await authApi.login({
      username: 'adbc',
      password: '123qwe',
    })

    mutate()
  }

  async function logout() {
    await authApi.logout()

    mutate({}, false)
  }

  return {
    profile,
    error,
    login,
    logout,
  }
}
