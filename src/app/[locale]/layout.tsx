import '@/assets/variables.css'
import '@/assets/globals.css'
import { useLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { Montserrat } from 'next/font/google'
const f = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Ramon Kroetz',
  description: 'Website',
}

export default function RootLayout({ children, params }: { children: React.ReactNode; params: any }) {
  const locale = useLocale()

  if (params.locale !== locale) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body className={f.variable}>{children}</body>
    </html>
  )
}
