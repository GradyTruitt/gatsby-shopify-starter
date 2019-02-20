import React, { Fragment } from 'react'
import FilterButton from 'components/filters/FilterButton'

const collections = ['View All', 'Winter Collection']

export default ({ activeFilter, updateCollection }) => {
  return (
    <Fragment>
      {collections.map((name,i) => (
        <FilterButton
          key={i}
          type='collection'
          activeFilter={activeFilter}
          updateCollection={updateCollection}
          >
          {name}
        </FilterButton>
      ))}
    </Fragment>
  )
}
