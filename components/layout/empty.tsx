import { LayoutProps } from '@/models/common'

export interface EmptyLayoutProps {}

export function EmptyLayout({ children }: LayoutProps) {
  return <div>{children}</div>
}
