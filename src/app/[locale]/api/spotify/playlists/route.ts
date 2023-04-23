/* eslint-disable camelcase */
import { getAccessToken } from '@/services/spotify'
import { NextResponse } from 'next/server'

export type PlaylistsSpotify = {
  href: string
  name: string
  imageUrl: string
}

export type PlaylistSpotify = {
  items: PlaylistsSpotify[]
}

const PLAYLIST_SPOTIFY_ENDPOINT = 'https://api.spotify.com/v1/me/playlists'

export async function getPlaylist() {
  const { access_token } = await getAccessToken()

  const response = await fetch(PLAYLIST_SPOTIFY_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
    },
  })

  if (response.status === 204 || response.status > 400) {
    return NextResponse.json([])
  }

  const playlist = await response.json()

  const items = playlist.items.map((play: any) => ({
    href: play.external_urls.spotify,
    name: play.name,
    imageUrl: play.images[0].url,
  }))

  return NextResponse.json(items)
}
