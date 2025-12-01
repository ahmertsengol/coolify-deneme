import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Coolfiy Deneme',
  description: 'Basit Next.js uygulaması',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}

