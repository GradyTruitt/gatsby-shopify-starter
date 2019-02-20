import React from 'react'
import PropTypes from 'prop-types'

const PriceFilter = ({ children, products, price, filterType }) => {
  if (price <= 0) return children({ filteredByPrice: products })

  let filteredProducts = products.filter(product => {
    let isIncluded = false
    if (filterType === "over") {
      isIncluded = parseFloat(product.node.priceRange.maxVariantPrice.amount) > parseFloat(price)
    }
    if (filterType === 'under') {
      isIncluded = parseFloat(product.node.priceRange.minVariantPrice.amount) < parseFloat(price)
    }
    return isIncluded
  })
  if (filteredProducts.length > 0) return children({ filteredByPrice: filteredProducts })
  else return <div>NO PRODUCTS AVAILABLE</div>
}

PriceFilter.propTypes = {
  price: PropTypes.number,
  filterType: PropTypes.oneOf(['over', 'under'])
}

export default PriceFilter
