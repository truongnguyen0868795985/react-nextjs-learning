import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import type { ReactElement } from 'react'
import { ReactNode } from 'react'

export interface LayoutProps {
  children: ReactNode
}

export type NextPageWithLayout = NextPage & {
  Layout?: (props: LayoutProps) => ReactElement
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
