import React, { Fragment } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Checkout from 'components/Checkout'
import PropTypes from 'prop-types'

const RemoveFromCart = ({ lineItemId, checkoutId, children }) => {

  const variables = {
    checkoutId: checkoutId,
    lineItemIds: [lineItemId]
  }

  return (
    <Mutation mutation={REMOVE_ITEM} variables={variables} >
      {removeItem => children(removeItem)}
    </Mutation>
  )
}

const WithCheckout = (props) => (
  <Checkout>
    {checkout => (
      <Fragment>
        {checkout && <RemoveFromCart checkoutId={checkout.id} {...props} /> }
      </Fragment>
    )}
  </Checkout>
)

RemoveFromCart.propTypes = {
  lineItemId: PropTypes.string.isRequired,
  checkoutId: PropTypes.string.isRequired
}

const REMOVE_ITEM = gql`
  mutation checkoutLineItemsRemove($checkoutId: ID!, $lineItemIds: [ID!]!) {
    checkoutLineItemsRemove(
      checkoutId: $checkoutId
      lineItemIds: $lineItemIds
    ) {
      userErrors {
        field
        message
      }
      checkout {
        id
        totalPrice
        subtotalPrice
        lineItems(first: 250) {
          edges {
            lineItem: node {
              id
              title
              quantity
              variant {
                id
                price
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

export default WithCheckout
