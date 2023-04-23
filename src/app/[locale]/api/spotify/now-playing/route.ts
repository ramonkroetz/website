/* eslint-disable camelcase */
import { getAccessToken } from '@/services/spotify'
import { NextResponse } from 'next/server'

export type NowPlayingSong = {
  album: string
  albumImageUrl: string
  artist: string
  isPlaying: boolean
  songUrl: string
  title: string
}

export const NOW_PLAYING_ENDPOINT = '/api/spotify/now-playing'

const NOW_PLAYING_SPOTIFY_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing'

export async function getNowPlaying() {
  const { access_token } = await getAccessToken()

  const response = await fetch(NOW_PLAYING_SPOTIFY_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
    },
  })

  if (response.status === 204 || response.status > 400) {
    return NextResponse.json({ isPlaying: false })
  }

  const song = await response.json()

  if (song.item === null) {
    return NextResponse.json({ isPlaying: false })
  }

  const isPlaying = song.is_playing
  const title = song.item.name
  const artist = song.item.artists.map((art: any) => art.name).join(', ')
  const album = song.item.album.name
  const albumImageUrl = song.item.album.images[0].url
  const songUrl = song.item.external_urls.spotify

  return NextResponse.json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  })
}

export async function GET() {
  return getNowPlaying()
}
