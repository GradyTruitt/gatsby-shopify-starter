import React, { Component } from 'react'
import styled from 'styled-components'

export default class FilterButton extends Component {
  updateFilters = () => {
    const {
      updateCollection,
      updatePriceRange,
      addTag,
      removeTag,
      type,
      activeFilter,
      priceRange,
      children
    } = this.props

    if (type === 'collection') {
      updateCollection(children)
    }
    if (type === 'tag') {
      if (!activeFilter.includes(children)) {
        addTag(children)
      }
      else removeTag(children)
    }
    if (type === 'price') {
      updatePriceRange(priceRange.name,priceRange.type,priceRange.price)
    }
  }



  render() {
    const { children, activeFilter } = this.props
    return (
      <Button
        active={ activeFilter.includes(children) }
        onClick={this.updateFilters}
        >{children}</Button>
    )
  }
}
const Button = styled.button`
  display: inline-block;
  outline: none;
  padding: 8px 10px;
  border-radius: 20px;
  margin: 0 5px;
  font-size: 12px;
  border: ${props => props.active ? '1px solid black' : '1px solid lightgray'};
  background-color: ${props => props.active ? 'black' : 'white'};
  color: ${props => props.active ? 'white' : 'lightgray'};
  cursor: pointer;
  white-space: nowrap;

  &:hover {
      color: ${props => props.active ? 'lightGray' : 'black'};
      border: 1px solid black;
  }
`
