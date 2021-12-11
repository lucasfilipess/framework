import { api, ResponseProps } from 'services'

export type ToDosProps = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export const getToDos = async () => {
  const { data }: ResponseProps = await api.get('todos')
  return data as ToDosProps[]
}
