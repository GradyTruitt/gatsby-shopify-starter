# gatsby-shopify-starter
A boilerplate for creating custom Shopify storefronts for using [GatsbyJs](https://www.gatsbyjs.org/) & [Apollo](https://www.apollographql.com/)

This starter package is meant to get your custom Shopify storefront up and running with minimal configuration.
This starter is meant to be used with the [Shopify Storefront API](https://help.shopify.com/en/api/custom-storefronts/storefront-api/getting-started).

### Built with the following technologies:
- [GatsbyJs](https://www.gatsbyjs.org/)
- [React-Apollo](https://www.apollographql.com/docs/react/api/react-apollo.html)
- [Styled-Components](https://www.styled-components.com/)
- [Netlify](https://www.netlify.com/) - for deployment.

## Getting Started

In order to connect your app to your shopify store you need to add three variables to an `env.development` file.

```js
NODE_PATH=./src //for resolving import paths.

GATSBY_SHOPIFY_STOREFRONT_NAME=<Your Storefront Name>
GATSBY_SHOPIFY_TOKEN=<Your Storefont Access Token>
```

## Test Your Connection

To test if your store connection is working use the `<Products>` component to query for all products in your store. The response should return an object containing the product data for all products in your Shopify Store.

```jsx
import React, { Fragment } from 'react'
import Products from 'components/Products'

export default () => (
  <Products >
    {({ products }) => (
      <Fragment >
        {console.log(products)}
      </Fragment>
    )}
  </Products>
)
```
