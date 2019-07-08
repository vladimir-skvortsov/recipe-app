import Loadable from 'react-loadable'

import Loading from '@client/components/Loading/Loading'


export const Home = Loadable({
  delay: 500,
  loader: () => import('@client/scenes/Home/Home'),
  loading: Loading,
})

export const NotFound = Loadable({
  delay: 500,
  loader: () => import('@client/scenes/NotFound/NotFound'),
  loading: Loading,
})
