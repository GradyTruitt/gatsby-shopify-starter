import React, { Fragment } from 'react'
import FilterButton from 'components/filters/FilterButton'

const priceRanges = [
  {
    name: 'View All',
    type: 'over',
    price: 0
  },
  {
    name: 'Under $20',
    type: 'under',
    price: 20
  },
  {
    name: 'Under $50',
    type: 'under',
    price: 50
  },
  {
    name: 'Under $100',
    type: 'under',
    price: 100
  }
]

export default ({ activeFilter, updatePriceRange }) => {
  return (
    <Fragment>
      {priceRanges.map((range,i) => (
        <FilterButton
          key={i}
          type='price'
          activeFilter={activeFilter.name}
          updatePriceRange={updatePriceRange}
          priceRange={range}
          >
          {range.name}
        </FilterButton>
      ))}
    </Fragment>
  )
}
