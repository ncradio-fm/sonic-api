// app/api/album-cover/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getAlbumCover } from '@/lib/albumCoverService'

const API_KEY = process.env.API_KEY

// GET /api/album-cover?artist=artist-name
export async function GET(request: NextRequest) {
  // Check API key (if server is on DEV ENV)
  if (process.env.NODE_ENV !== 'development') {
    if (request.headers.get('x-api-key') !== API_KEY) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }

  const searchParams = request.nextUrl.searchParams
  const artist = searchParams.get('artist')

  // Check if artist name is provided
  if (!artist) {
    return NextResponse.json({ error: 'Artist name is required' }, { status: 400 })
  }

  // Fetch the album cover
  try {
    const imageBuffer = await getAlbumCover(artist)
    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/webp',
      },
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch album cover' }, { status: 500 })
  }
}