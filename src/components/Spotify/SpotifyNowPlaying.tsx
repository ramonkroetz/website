/* eslint-disable @next/next/no-img-element */

'use client'

import { useEffect, useState } from 'react'
import { NowPlayingSong, NOW_PLAYING_ENDPOINT } from '@/app/[locale]/api/spotify/now-playing/route'

import s from './SpotifyNowPlaying.module.css'

const TIMER_NEW_REQUEST = 30000

export default function SpotifyNowPlaying() {
  const [counter, setCounter] = useState<number>(0)
  const [info, setInfo] = useState<NowPlayingSong>({
    album: '',
    albumImageUrl: '',
    artist: '',
    isPlaying: false,
    songUrl: '',
    title: '',
  })

  useEffect(() => {
    let timer: any

    async function init() {
      try {
        const response = await fetch(NOW_PLAYING_ENDPOINT, {
          method: 'GET',
        }).then((res: Response) => res.json())

        setCounter((cou) => cou + 1)
        setInfo(response)
      } catch (error) {
        clearTimeout(timer)
      }
    }

    if (counter === 0) {
      init()
      return
    }

    timer = setTimeout(() => {
      init()
    }, TIMER_NEW_REQUEST)

    return () => {
      clearTimeout(timer)
    }
  }, [counter])

  if (!info.isPlaying) {
    return null
  }

  return (
    <>
      <a className={s.container} href={info.songUrl} target='_blank' rel='noreferrer'>
        <h2>Playing now</h2>
        <div className={s.song}>
          <img className={s.image} src={info.albumImageUrl} alt={info.title} />
          <div className={s.wrapperTitle}>
            <h2>{info.artist}</h2>
            <hr />
            <p>{info.title}</p>
          </div>
        </div>
      </a>
      <hr className={s.hr} />
    </>
  )
}
