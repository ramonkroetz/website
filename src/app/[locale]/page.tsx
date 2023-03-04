import { useTranslations } from 'next-intl'
import s from './page.module.css'

export default function Home() {
  const t = useTranslations('Home')
  return <main className={s.main}>{t('wait')}</main>
}
