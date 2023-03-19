import Image from 'next/image'
import { useTranslations } from 'next-intl'
import cn from 'classnames'

import Camera from '@/assets/icons/camera.svg'

import img1 from '@/assets/images/home/01.jpg'
import img2 from '@/assets/images/home/02.jpg'
import img3 from '@/assets/images/home/03.jpg'
import img4 from '@/assets/images/home/04.jpg'
import img5 from '@/assets/images/home/05.jpg'
import img6 from '@/assets/images/home/06.jpg'
import img7 from '@/assets/images/home/07.jpg'

import s from './PicturesSection.module.css'

export default function PicturesSection() {
  const t = useTranslations('HomePictures')

  const images = [
    {
      src: img4,
      alt: t('img1'),
      horizontal: true,
    },
    {
      src: img5,
      alt: t('img1'),
      vertical: true,
    },
    {
      src: img1,
      alt: t('img1'),
      vertical: true,
    },
    {
      src: img7,
      alt: t('img1'),
      vertical: true,
    },
    {
      src: img6,
      alt: t('img1'),
    },
    {
      src: img2,
      alt: t('img1'),
      horizontal: true,
    },
    {
      src: img3,
      alt: t('img1'),
    },
  ]

  return (
    <div className={s.section}>
      <div className={s.container}>
        <div className={s.wrapperTitle}>
          <Camera className={s.camera} />
          <h2>{t('title')}</h2>
        </div>
        <hr className={s.hr} />
        <div className={s.imagesWrapper}>
          {images.map((image) => {
            const imageClassName = cn(s.picture, {
              [s.verticalPicture]: image.vertical,
              [s.horizontalPicture]: image.horizontal,
            })

            // aspect ratio
            const width = image.horizontal ? 2560 : 1440
            const height = image.horizontal ? 1440 : 2560

            return (
              <Image
                className={imageClassName}
                placeholder='blur'
                src={image.src}
                alt={image.alt}
                width={width}
                height={height}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
