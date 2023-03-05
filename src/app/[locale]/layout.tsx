import '@/assets/variables.css'
import '@/assets/globals.css'
import React from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { notFound } from 'next/navigation'
import { Montserrat } from 'next/font/google'
import banner from '@/assets/images/banner.jpg'
import Image from 'next/image'

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

type RootLayoutProps = { children: React.ReactNode; params: any } // TODO

export default function RootLayout({ children, params }: RootLayoutProps) {
  const t = useTranslations('Main')
  const locale = useLocale()

  if (params.locale !== locale) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body className={f.variable}>
        <Image className={s.banner} src={banner} alt={t('banner')} />
        <Header />
        <main className={s.main}>{children}</main>
      </body>
    </html>
  )
}
