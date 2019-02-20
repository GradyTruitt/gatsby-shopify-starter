import React from 'react'
import PropTypes from 'prop-types'

const TagFilter = ({ children, products, tags }) => {
  if (tags === 'View All') return children({ filteredByTag: products})

  let filteredProducts = products.filter(product => {
    let isIncluded = false
    product.node.tags.forEach(productTag => tags.forEach(testTag => {
      if (productTag === testTag) {
        isIncluded = true
        return null
      }
      else return null
    }))
    return isIncluded
  })

  if (filteredProducts.length > 0) return children({ filteredByTag: filteredProducts })
  else return <div>NO PRODUCTS AVAILABLE</div>

  // if (collection.length > 0) return children({ collection })
  // else return <div>NO PRODUCTS AVAILABLE</div>
}

TagFilter.propTypes = {
  tags: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.oneOf(['View All'])
  ])
}

export default TagFilter
