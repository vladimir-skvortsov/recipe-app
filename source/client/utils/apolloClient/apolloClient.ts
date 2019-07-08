import { createUploadLink } from 'apollo-upload-client'
import { RetryLink } from 'apollo-link-retry'
import { setContext } from 'apollo-link-context'
import { from } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { persistCache } from 'apollo-cache-persist'
import ApolloClient from 'apollo-client'


const httpLink = createUploadLink({ uri: '/graphql' })
const retryLink = new RetryLink({ attempts: { max: Infinity } })
const authLink = setContext((request, { headers }) => {
  const token = localStorage.token

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  }
})
const link = from([retryLink, authLink, httpLink])

const cache = new InMemoryCache().restore(window.__APOLLO_STATE__ || {})
const storage = window.localStorage
export const waitOnCache = persistCache({ cache, storage })


const apolloClient = new ApolloClient({ cache, link })


export default apolloClient