import { authApi } from '../api-client'
import { useAuth } from '@/hooks/index'
import { useRouter } from 'next/router'

type Props = {}

export default function LoginPage({}: Props) {
  const router = useRouter()
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false,
  })

  async function handleLoginClick() {
    try {
      await login()

      console.log('Redirect to dashboard')
      router.push('/about')
    } catch (error) {
      console.log('Failed to login', error)
    }
  }
  async function handleGetProfileClick() {
    try {
      await authApi.getProfile()
    } catch (error) {
      console.log('Failed to get profile', error)
    }
  }

  async function handleLogoutClick() {
    try {
      await logout()
      console.log('Redirect to login page')
    } catch (error) {
      console.log('Failed to logout', error)
    }
  }

  return (
    <div>
      <h1>Login page</h1>

      <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>

      <button onClick={handleLoginClick}>Login</button>
      {/* <button onClick={handleGetProfileClick}>Get profile</button> */}
      <button onClick={handleLogoutClick}>Logout</button>
      <button onClick={() => router.push('/about')}>About</button>
    </div>
  )
}
