import { api, ResponseProps } from 'services'

export type AlbumProps = {
  userId: number
  id: number
  title: string
}

export type PhotosProps = {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export const getAlbums = async () => {
  const { data }: ResponseProps = await api.get('albums')
  return data as AlbumProps[]
}

export const getPhotos = async (userId: number) => {
  const { data }: ResponseProps = await api.get(`albums/${userId}/photos`)
  return data as PhotosProps[]
}
