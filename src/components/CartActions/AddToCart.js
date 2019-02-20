import React, { Fragment } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Checkout from "components/Checkout";
import PropTypes from "prop-types";

const AddToCart = ({ qty, variantId, notes, checkoutId, children }) => {
  const variables = {
    lineItems: [
      {
        quantity: qty,
        variantId: variantId
      }
    ],
    checkoutId: checkoutId
  };

  return (
    <Mutation mutation={ADD_ITEM} variables={variables}>
      {addToCart => children(addToCart)}
    </Mutation>
  );
};

const WithCheckout = props => (
  <Checkout>
    {checkout => (
      <Fragment>
        {checkout && <AddToCart checkoutId={checkout.id} {...props} />}
      </Fragment>
    )}
  </Checkout>
);

AddToCart.propTypes = {
  qty: PropTypes.number.isRequired,
  variantId: PropTypes.string.isRequired,
  notes: PropTypes.string,
  checkoutId: PropTypes.string.isRequired
};

const ADD_ITEM = gql`
  mutation checkoutLineItemsAdd(
    $lineItems: [CheckoutLineItemInput!]!
    $checkoutId: ID!
  ) {
    checkoutLineItemsAdd(lineItems: $lineItems, checkoutId: $checkoutId) {
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
`;

export default WithCheckout;
