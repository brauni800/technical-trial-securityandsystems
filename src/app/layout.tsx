import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Roboto } from 'next/font/google'
import 'pattern.css/dist/pattern.min.css'
import './globals.css'

const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mi Perfil',
  description: 'Este blog habla un poco de mi y de mi carrera'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
