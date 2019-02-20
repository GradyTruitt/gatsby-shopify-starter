import React, { Fragment } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Checkout from 'components/Checkout'
import PropTypes from 'prop-types'

const UpdateCart = ({ lineItem, checkoutId, direction, children }) => {
  const quantity = direction === '+' ? lineItem.quantity+1 : lineItem.quantity-1

  const variables = {
    checkoutId: checkoutId,
    lineItems: [{
      id: lineItem.id,
      variantId: lineItem.variant.id,
      quantity: quantity
    }]
  }

  return (
    <Mutation mutation={UPDATE_CART} variables={variables} >
      {updateItem => children(updateItem)}
    </Mutation>
  )
}

const WithCheckout = (props) => (
  <Checkout>
    {checkout => (
      <Fragment>
        {checkout && <UpdateCart checkoutId={checkout.id} {...props} /> }
      </Fragment>
    )}
  </Checkout>
)

UpdateCart.propTypes = {
  lineItem: PropTypes.object.isRequired,
  checkoutId: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['+', '-']).isRequired
}

export const UPDATE_CART = gql`
  mutation checkoutLineItemsUpdate(
    $checkoutId: ID!
    $lineItems: [CheckoutLineItemUpdateInput!]!
  ) {
    checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {
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
