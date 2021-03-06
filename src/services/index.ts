export { default as api } from './api.service'
export { getAlbums, getPhotos } from './albums.service'
export { getPosts } from './posts.service'
export { getToDos } from './todos.service'
export { signInService } from './signIn.service'
export { signUpService } from './signUp.service'

export type { ResponseProps } from './api.service'
export type { AlbumProps, PhotosProps } from './albums.service'
export type { PostsProps } from './posts.service'
export type { ToDosProps } from './todos.service'
export type {
  SignInProps,
  SignInCredentialsProps,
  SignInDataProps
} from './signIn.service'
export type {
  SignUpProps,
  SignUpCredentialsProps,
  SignUpDataProps
} from './signUp.service'
