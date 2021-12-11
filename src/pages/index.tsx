import loadable from '@loadable/component'
import { Spinner } from 'components'

export const Home = loadable(() => import('./Home'), {
  fallback: <Spinner />
})
