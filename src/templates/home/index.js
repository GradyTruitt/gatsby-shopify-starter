import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import Home from './Home'
import SEO from 'components/SEO'
import { Helmet } from 'react-helmet'

export const HomePageTemplate = ({ seo, intro }) => (
  <Fragment>
    <SEO title={seo.title} description={seo.description} />
    <Helmet title={seo.title} />
    <Home
      heading={intro.heading}
      subheading={intro.subheading}
    />
  </Fragment>
)

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <HomePageTemplate
        seo={frontmatter.seo}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        seo {
          title
          description
        }
        intro {
          heading
          subheading
        }
      }
    }
  }
`
