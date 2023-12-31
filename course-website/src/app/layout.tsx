import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
const inter = Inter({ subsets: ['latin'] })
import {ToastProvider} from "../components/providers/toast-providers"
import { ConfettiProvider } from '@/components/providers/confetti-provider'

export const metadata: Metadata = {
  title: 'Pooja Luthra',
  description: 'Pooja Luthra',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <ConfettiProvider/>
        <ToastProvider/>
        {children}</body>
    </html>
    </ClerkProvider>
  )
}
