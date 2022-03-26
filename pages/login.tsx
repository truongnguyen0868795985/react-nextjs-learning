import { authApi } from '../api-client'

type Props = {}

export default function LoginPage({}: Props) {
  async function handleLoginClick() {
    try {
      await authApi.login({
        username: 'huhuhu',
        password: '123qwe',
      })
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
      await authApi.logout()
    } catch (error) {
      console.log('Failed to logout', error)
    }
  }

  return (
    <div>
      <h1>Login page</h1>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleGetProfileClick}>Get profile</button>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  )
}
