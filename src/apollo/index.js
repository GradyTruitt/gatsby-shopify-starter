import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'

import httpLink from './http-link'
import errorLink from './error-link'

const cache = new InMemoryCache()

const authLink = setContext(() => ({
  headers: {
    'X-Shopify-Storefront-Access-Token': process.env.GATSBY_SHOPIFY_TOKEN
  }
}))

export const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, httpLink]),
  cache
})
