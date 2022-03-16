import { LayoutProps } from '@/models/common'
import Link from 'next/link'

export interface MainLayoutProps {}

export function MainLayout({ children }: LayoutProps) {
  return (
    <div>
      <h1>MainLayout</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
      <div>{children}</div>
    </div>
  )
}
