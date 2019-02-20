import React from 'react'
import Helmet from 'react-helmet'
import config from '../settings.json'

const SEO = ({
  image,
  title,
  description,
  url,
  type,
  structuredData,
  structuredDataImage,
  structuredDataLogo
}) => {
  title = title ? title : config.siteTitle
  description = description ? description : config.siteDescription
  image = image ? image : config.metaImage
  url = url ? url : config.siteUrl + config.pathPrefix
  structuredDataImage = !structuredDataImage
    ? config.metaImage
    : structuredDataImage
  structuredDataLogo = !structuredDataLogo
    ? config.siteLogo
    : structuredDataLogo

  let schemaOrgJSONLD = {
    '@context': 'http://schema.org',
    '@type': 'Website',
    url: url,
    name: title
  }

  if (structuredData) {
    const { context, type: sdType, ...restStructuredData } = structuredData

    schemaOrgJSONLD = {
      '@context': context,
      '@type': sdType,
      logo: config.siteUrl + structuredDataLogo,
      image: config.siteUrl + structuredDataImage,
      ...restStructuredData
    }
  }

  return (
    <Helmet>
      {/* General tags */}
      <meta name="description" content={description} />
      <meta name="image" content={config.siteUrl + image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type ? type : 'website'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={config.siteUrl + image} />
      <meta
        property="fb:app_id"
        content={config.siteFBAppID ? config.siteFBAppID : ''}
      />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:creator"
        content={config.userTwitter ? config.userTwitter : ''}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={config.siteUrl + image} />
    </Helmet>
  )
}

export default SEO
