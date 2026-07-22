import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Revokra - Secure Document Management',
  description: 'Production-ready front-end for Revokra using Next.js, TypeScript, Framer Motion, and Lucide icons.',
  keywords: ['document management', 'security', 'SaaS'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
