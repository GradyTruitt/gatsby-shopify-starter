import React, { Fragment } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

export default ({ checkoutId, children }) => {
  if (checkoutId) return (
    <Query query={GET_CHECKOUT} variables={{ id: checkoutId }}>
        {({ data, loading }) => {
          if (loading) return children()
          if (data) return (
            <Fragment>
              {data && data.checkout && children(data.checkout)}
            </Fragment>
          )}}
      </Query>
  )
  else return children()
}

const GET_CHECKOUT = gql`
  query getCheckoutByNodeId($id: ID!) {
    checkout: node(id: $id) {
      id
      ... on Checkout {
        id
        webUrl
        createdAt
        totalPrice
        subtotalPrice
        totalTax
        updatedAt
        lineItems(first: 250) {
          edges {
            lineItem: node {
              id
              title
              quantity
              customAttributes {
                key
                value
              }
              variant {
                id
                price
                title
                image {
                  id
                  transformedSrc
                }
              }
            }
          }
        }
      }
    }
  }
`
