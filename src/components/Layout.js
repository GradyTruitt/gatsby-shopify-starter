import React, { Fragment, Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from 'react-apollo'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import theme, { GlobalStyles } from 'theme'
import { client } from 'apollo'

class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <Fragment>
            <GlobalStyles />
            <StaticQuery
              query={GET_SITE_DATA}
              render={data => (
                <Helmet>
                  <title>{data.site.siteMetadata.title}</title>
                  <link rel="icon" href={data.favicon.fixed.src} />
                </Helmet>
              )}
            />
            {children}
          </Fragment>
        </ApolloProvider>
      </ThemeProvider>
    )
  }
}

export default Layout

const GET_SITE_DATA = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
    favicon: imageSharp(original: { src: { regex: "/favicon/" } }) {
      fixed(width: 33) {
        src
      }
    }
  }
`
