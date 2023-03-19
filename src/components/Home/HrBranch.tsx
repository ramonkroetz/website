import Branches from '@/assets/icons/branches.svg'

import s from './HrBranch.module.css'

export default function HrBranch() {
  return (
    <div className={s.branch}>
      <div className={s.blur} />
      <div className={s.container}>
        <Branches className={s.icon} />
        <Branches className={s.iconRight} />
      </div>
    </div>
  )
}
