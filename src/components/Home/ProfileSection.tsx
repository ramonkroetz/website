import { useTranslations } from 'next-intl'
import Image from 'next/image'

import banner from '@/assets/images/banner.jpg'
import ramon from '@/assets/images/ramon.jpg'
import s from './ProfileSection.module.css'

export default function ProfileSection() {
  const t = useTranslations('Home')

  return (
    <div className={s.section}>
      <Image priority className={s.banner} src={banner} alt={t('banner')} fill />
      <div className={s.container}>
        <div className={s.profilePictureWrapper}>
          <Image priority width={200} height={250} className={s.profilePicture} src={ramon} alt={t('picture')} />
        </div>
        <div className={s.profileInfo}>
          <h2 className={s.profileName}>Ramon Kroetz</h2>
          <hr className={s.profileHr} />
          <p className={s.profileDescription}>{t('profileText')}</p>
        </div>
      </div>
    </div>
  )
}
