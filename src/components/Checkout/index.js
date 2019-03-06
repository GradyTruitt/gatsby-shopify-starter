import React, { Fragment, Component } from 'react'
import gql from 'graphql-tag'
import { compose, graphql } from 'react-apollo'
import Checkout from './Checkout'

class Initialize extends Component {

  state = {
    checkoutId: null
  }

  async componentDidMount() {
    const checkoutId = await getCheckoutId()
    const { createCheckout } = this.props

    if (checkoutId) return this.setState({ checkoutId: getCheckoutId()})
    else {
      const { data } = await createCheckout()

      if (typeof window === 'undefined') return null
      window.localStorage.setItem(`${process.env.GATSBY_SHOPIFY_STOREFRONT_NAME}CheckoutID`, data.checkoutCreate.checkout.id)
      this.setState({ checkoutId: getCheckoutId()})
    }

  }
  render() {
    const { children } = this.props
    const { checkoutId } = this.state
    return (
      <Fragment>
        {checkoutId
          ?
          <Checkout checkoutId={checkoutId}>
            {checkout => children(checkout)}
          </Checkout>
          :
          children()
        }
      </Fragment>
    )
  }
}

const getCheckoutId = () => {
  if (typeof window === 'undefined') return null
  return window.localStorage[`${process.env.GATSBY_SHOPIFY_STOREFRONT_NAME}CheckoutID`]
}

const createCheckout = graphql(
  gql`
    mutation checkoutCreate($input: CheckoutCreateInput!) {
      checkoutCreate(input: $input) {
        userErrors {
          field
          message
        }
        checkout {
          id
          createdAt
          updatedAt
          webUrl
          totalPrice
          subtotalPrice
          lineItems(first: 250) {
            edges {
              lineItem: node {
                title
                quantity
              }
            }
          }
        }
      }
    }
  `,
  {
    name: 'createCheckout',
    options: {
      variables: { input: { lineItems: [] } }
    }
  }
)

export default compose(
  createCheckout
)(Initialize)
