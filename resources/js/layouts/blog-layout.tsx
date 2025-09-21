import { AppHeader } from '@/components/app-header'

export default function BlogLayout({ children } : React.PropsWithChildren) {
  return (
    <main>
      <AppHeader />
      <article>{children}</article>
    </main>
  )
}