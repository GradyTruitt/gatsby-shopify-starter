# gatsby-shopify-starter

A boilerplate for creating custom Shopify storefronts for using [GatsbyJs](https://www.gatsbyjs.org/) & [Apollo](https://www.apollographql.com/)

**disclaimer: This package is still a work in progress. For suggestions or questions please hit me up on [Github](https://github.com/GradyTruitt/gatsby-shopify-starter)**

This starter package is built to get your custom Shopify storefront up and running with minimal configuration.
This starter is meant to be used with the [Shopify Storefront API](https://help.shopify.com/en/api/custom-storefronts/storefront-api/getting-started).

### Built with the following technologies:

- [GatsbyJs](https://www.gatsbyjs.org/)
- [React-Apollo](https://www.apollographql.com/docs/react/api/react-apollo.html)
- [Styled-Components](https://www.styled-components.com/)
- [Netlify](https://www.netlify.com/) - for deployment.

## Installation

1. First, install the gatsby-shopify-starter cli by running

```
npm i gatsby-shopify-starter -g
```

for npm and

```
yarn add gatsby-shopify-starter -g
```

if you prefer yarn.

2. To create your Gatsby Shopify repo navigate to the appropriate directory in your terminal and run the following:

```
gatsby-shopify-create <repo name>
```

_note: you can also use `gscreate <repo name>` for a shorter command._

And thats it! Your custom Shopify site is ready to go!

## Getting Started

1. In order to connect your app to your shopify store you need to add three variables to an `env.development` file.

```js
NODE_PATH=./src //for resolving import paths.

GATSBY_SHOPIFY_STOREFRONT_NAME=<Your Storefront Name>
GATSBY_SHOPIFY_TOKEN=<Your Storefont Access Token>
```

2. Next you will need to configure your site settings in the `settings.json` file inside the `./src` folder.

- These settings will be used to specify the site title, main site url, description etc.
- If you would like to modify the site titles and descriptions page by page you can do so using the `<SEO>` component and adding an seo section into your `page.md` file. For example:

Add an `seo` section to `about.md`.

```md
templateKey: about

seo:
title: About Us
description: About our store and the awesome people behind the scenes.

...
```

Pass the seo data to the `<SEO>` component in your about page template. (`templates > about > index.js`).

```jsx
import React, { Fragment } from 'react'
import AboutPage from './AboutPage'
import SEO from 'components/SEO'

export const AboutPageTemplate = ({ seo, info }) =>  return (
  <Fragment>
    <SEO title={seo.title} description={seo.description} />
    <AboutPage pageInfo={info} />
  </Fragment>
)
```

## Test Your Connection

To test if your store connection is working use the `<Products>` component to query for all products in your store. The response should return an object containing the product data for all products in your Shopify Store.

```jsx
import React, { Fragment } from "react";
import Products from "components/Products";

export default () => (
  <Products>
    {({ products }) => <Fragment>{console.log(products)}</Fragment>}
  </Products>
);
```
