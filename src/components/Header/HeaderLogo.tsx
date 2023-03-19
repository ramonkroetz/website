'use client'

import RzLogo from '@/assets/icons/rz.svg'

import s from './HeaderLogo.module.css'

export function HeaderLogo() {
  function onClickLogo() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={s.logoContainer}>
      <RzLogo className={s.logoName} onClick={() => onClickLogo()} />
    </div>
  )
}
