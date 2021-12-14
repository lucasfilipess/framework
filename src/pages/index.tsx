import loadable from '@loadable/component'
import { Loader } from 'components'

export const Posts = loadable(() => import('./Posts'), {
  fallback: <Loader />
})

export const Albums = loadable(() => import('./Albums'), {
  fallback: <Loader />
})

export const ToDos = loadable(() => import('./ToDos'), {
  fallback: <Loader />
})

export const NotFound = loadable(() => import('./NotFound'), {
  fallback: <Loader />
})

export const SignIn = loadable(() => import('./SignIn'), {
  fallback: <Loader />
})

export const SignUp = loadable(() => import('./SignUp'), {
  fallback: <Loader />
})
