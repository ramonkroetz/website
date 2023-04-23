/* eslint-disable @next/next/no-img-element */
import { getPlaylist, PlaylistsSpotify } from '@/app/[locale]/api/spotify/playlists/route'
import SpotifyIcon from '@/assets/icons/spotify.svg'
import SpotifyNowPlaying from '../Spotify/SpotifyNowPlaying'

import s from './SpotifySection.module.css'

export default async function SpotifySection() {
  const playlists = await getPlaylist().then((res: Response) => res.json())

  function renderPlaylists() {
    return playlists.map((item: PlaylistsSpotify) => (
      <a href={item.href} target='_blank' rel='noreferrer' className={s.card}>
        <h2 className={s.cardName}>{item.name}</h2>
        <img className={s.cardImage} src={item.imageUrl} alt={item.name} />
      </a>
    ))
  }

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.wrapperTitle}>
          <SpotifyIcon className={s.icon} />
          <h2>spotify playlists</h2>
        </div>
        <hr className={s.hr} />
        <SpotifyNowPlaying />
        <div className={s.playlists}>{renderPlaylists()}</div>
      </div>
    </section>
  )
}
