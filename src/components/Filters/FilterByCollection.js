import React from 'react'
import PropTypes from 'prop-types'

const CollectionFilter = ({ children, products, value }) => {
  if (value === 'View All') return children({ collection: products })

  let collection = products.filter(product => {
    let isIncluded = false
    product.node.collections.edges.map(collection => {
      isIncluded = Object.values(collection.node).includes(value)
      return null
    })
    return isIncluded
  })

  if (collection.length > 0) return children({ collection })
  else return <div>NO PRODUCTS AVAILABLE</div>
}

CollectionFilter.propTypes = {
  value: PropTypes.oneOf([
    'View All',
    '1895 By Amata',
    'Amata Classics',
    'Maria',
    'Be Loved',
    'Joseph'
  ])
}

export default CollectionFilter
