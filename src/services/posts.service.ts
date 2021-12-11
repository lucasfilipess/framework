import { api, ResponseProps } from 'services'

export type PostsProps = {
  userId: number
  id: number
  title: string
  body: string
}

export const getPosts = async () => {
  const { data }: ResponseProps = await api.get('posts')
  return data as PostsProps[]
}
