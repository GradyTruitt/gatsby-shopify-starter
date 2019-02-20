import { createHttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'

export default createHttpLink({
  uri: `https://${
    process.env.GATSBY_SHOPIFY_STOREFRONT_NAME
  }.myshopify.com/api/graphql.json`,
  fetch: fetch
})
