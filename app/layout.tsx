import type { Metadata } from 'next'
import { EB_Garamond } from 'next/font/google'
import { Geist, Geist_Mono } from 'next/font/google'
import { Navigation } from '@/components/navigation'

import './globals.css'

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-eb-garamond',
  display: 'swap',
})

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Saurish Srivastava',
  description: 'Personal website of Saurish Srivastava',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${ebGaramond.variable} ${geist.variable} ${geistMono.variable} font-serif antialiased`}
      >
        <div className="mx-auto max-w-xl px-6 py-12 md:py-20">
          <Navigation />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
