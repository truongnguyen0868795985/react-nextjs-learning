import { Auth } from '@/components/common'
import { LayoutProps } from '@/models/common'
import Link from 'next/link'
import { useAuth } from '@/hooks'
import { useRouter } from 'next/router'

export interface AdminLayoutProps {}

export function AdminLayout({ children }: LayoutProps) {
  const router = useRouter()
  const { profile, logout } = useAuth()

  async function handleLogoutClick() {
    try {
      await logout()
      router.push('/login')
      console.log('Redirect to login page')
    } catch (error) {
      console.log('Failed to logout', error)
    }
  }
  return (
    <Auth>
      <h1>AdminLayout</h1>

      <div>Profile: {JSON.stringify(profile) || ''}</div>

      <div>
        <button onClick={handleLogoutClick}>Logout</button>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="about">
        <a>about</a>
      </Link>
      <div>{children}</div>
    </Auth>
  )
}
