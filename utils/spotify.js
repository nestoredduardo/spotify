import SpotifyWebApi from 'spotify-web-api-node'

const scopes = [
  'user-read-email',
  'user-read-currently-playing',
  'streaming',
  'user-library-read',
  'user-top-read',
  'user-read-playback-state',
  'user-modify-playback-state',
].join(',')

const params = {
  scope: scopes,
}

const queryParamString = new URLSearchParams(params)

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEST_PUBLIC_CLIENT_SECRET,
})

export default spotifyApi

export { LOGIN_URL }
