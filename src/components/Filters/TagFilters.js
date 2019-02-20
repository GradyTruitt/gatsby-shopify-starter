import React, { Fragment } from 'react'
import FilterButton from 'components/filters/FilterButton'

const tags = ['View All', 'Gray', 'White', 'Sweaters', 'Long Sleeved']

export default ({ activeFilter, methods }) => {
  return (
    <Fragment>
      {tags.map((tag,i) => (
        <FilterButton
          key={i}
          type='tag'
          activeFilter={activeFilter}
          addTag={methods.addTag}
          removeTag={methods.removeTag}
          >
          {tag}
        </FilterButton>
      ))}
    </Fragment>
  )
}
