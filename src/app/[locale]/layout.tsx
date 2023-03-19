import '@/assets/variables.css'
import '@/assets/globals.css'
import React from 'react'
import { useLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { Montserrat } from 'next/font/google'

import { Header } from '@/components/Header/Header'
import s from './layout.module.css'

const f = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Ramon Kroetz',
  description: 'Website',
}

type RootLayoutProps = { children: React.ReactNode; params: { locale: string } }

export default function RootLayout({ children, params }: RootLayoutProps) {
  const locale = useLocale()

  if (params.locale !== locale) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body className={f.variable}>
        <Header />
        <main className={s.main}>{children}</main>
      </body>
    </html>
  )
}
