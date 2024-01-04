import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const roboto = Montserrat({
  weight: '400',
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: 'Work Ambience',
  description: 'App to work',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
