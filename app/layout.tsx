import type { Metadata } from 'next'
import { Source_Sans_3, Lora, Fira_Code } from 'next/font/google'
import { Navigation } from '@/components/navigation'

import './globals.css'

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
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
        className={`${sourceSans.variable} ${lora.variable} ${firaCode.variable} font-sans antialiased`}
      >
        <div className="mx-auto max-w-xl px-6 py-12 md:py-20">
          <Navigation />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
