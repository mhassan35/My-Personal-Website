import NavBarPage from '@/Components/Navigation'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/Components/Footer'
import Background from '@/utils/Background'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Muhammad Hassan',
  description: 'Muhammad Hassan Personal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Background />
        <NavBarPage />
        {children}
        <Footer />  
      </body>
    </html>
  )
}
