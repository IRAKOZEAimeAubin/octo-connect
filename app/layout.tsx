import type {Metadata} from 'next'
import {Montserrat as FontSans} from 'next/font/google'
import './globals.css'
import {cn} from '@/lib/utils'
import Nav from './nav/Nav'

const fontSans = FontSans({subsets: ['latin'], variable: '--font-sans'})

export const metadata: Metadata = {
  title: 'OctoConnect',
  description: 'The social app for you',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased mx-4 md:mx-48 xl:mx-96',
          fontSans.variable,
        )}
      >
        <Nav />
        {children}
      </body>
    </html>
  )
}
