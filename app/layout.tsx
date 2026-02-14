import type { Metadata } from 'next'
import { Inter, Libre_Baskerville, JetBrains_Mono } from 'next/font/google'
import { Navigation } from '@/components/navigation'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre-baskerville',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Anya Sikri',
  description: 'Personal website of Anya Sikri',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${libreBaskerville.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <div className="mx-auto max-w-xl px-6 py-12 md:py-20">
          <Navigation />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
