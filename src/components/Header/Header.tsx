import Link from 'next/link'
import RzLogo from '@/assets/icons/rz.svg'
import Instagram from '@/assets/icons/instagram.svg'
import Linkedln from '@/assets/icons/linkedln.svg'
import Github from '@/assets/icons/github.svg'
import { LOCALES } from '@/constants/locales'

import s from './Header.module.css'

export function Header() {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.social}>
          <a className={s.socialLink} href='https://www.instagram.com/ramonkroetz/' target='_blank' rel='noreferrer'>
            <Instagram />
          </a>
          <a className={s.socialLink} href='https://www.linkedin.com/in/ramonkroetz/' target='_blank' rel='noreferrer'>
            <Linkedln />
          </a>
          <a className={s.socialLink} href='https://github.com/ramonkroetz' target='_blank' rel='noreferrer'>
            <Github />
          </a>
        </div>
        <div className={s.logoContainer}>
          <RzLogo className={s.logoName} />
        </div>
        <div className={s.language}>
          <Link className={s.languageLink} href={`/${LOCALES.en}`}>
            en
          </Link>
          <Link className={s.languageLink} href={`/${LOCALES.br}`}>
            br
          </Link>
        </div>
      </div>
    </header>
  )
}
