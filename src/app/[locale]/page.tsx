import { useTranslations } from 'next-intl'
import Image from 'next/image'

import ramon from '@/assets/images/ramon.jpg'
import s from './page.module.css'

export default function Home() {
  const t = useTranslations('Home')
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.profilePictureWrapper}>
          <Image className={s.profilePicture} src={ramon} alt={t('picture')} />
        </div>
        <div className={s.profileInfo}>
          <h2 className={s.profileName}>Ramon Kroetz</h2>
          <hr className={s.profileHr} />
          <p className={s.profileDescription}>{t('profileText')}</p>
        </div>
      </div>
    </section>
  )
}
