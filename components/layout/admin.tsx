import { LayoutProps } from '@/models/common'
import Link from 'next/link'

export interface AdminLayoutProps {}

export function AdminLayout({ children }: LayoutProps) {
  return (
    <div>
      <h1>AdminLayout</h1>
      <Link href="">
        <a>Home</a>
      </Link>
      <Link href="about">
        <a>about</a>
      </Link>
      <div>{children}</div>
    </div>
  )
}
