import s from './page.module.css'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('Home')
  return <main className={s.main}>{t('wait')}</main>
}
