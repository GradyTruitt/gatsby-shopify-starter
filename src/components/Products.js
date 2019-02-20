import React from 'react'
import gql from "graphql-tag"
import { Query } from "react-apollo"

export default ({ children, data }) => {

    return (
        <Query query={GET_PRODUCTS}>
            {({ loading, error, data }) => {
                if (loading) return <div>LOADING PRODUCTS..</div>
                if (error) return <div>Error</div>
                if (data) return children({ products: data.shop.products.edges})
            }}
        </Query>
    )
}

const GET_PRODUCTS = gql`
  query {
    shop {
      products(first: 250) {
        edges {
          node {
            id
            title
            description
            availableForSale
            priceRange {
              maxVariantPrice { amount }
              minVariantPrice { amount }
            }
            tags
            handle
            productType
            collections(first: 5) {
              edges {
                node {
                  id
                  handle
                  title
                }
              }
            }
            images(first: 5) {
              edges {
                node {
                  id
                  transformedSrc(maxWidth: 2000)
                }
              }
            }
            variants(first: 250) {
              edges {
                node {
                  id
                  price
                  title
                  availableForSale
                  image(maxWidth: 2000) {
                    id
                    transformedSrc(maxWidth: 2000)
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
