import type { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col flex-1 w-full">
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <Header />
      <main className="flex-1 outline-none" id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
