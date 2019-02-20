import React from 'react'
import styled from 'styled-components'
import CollectionFilters from './CollectionFilters'
import TagFilters from './TagFilters'
import PriceFilters from './PriceFilters'

export default ({ methods, activeTags, activeCollection, activePriceRange }) => (
  <Container>
    <Label>Collections | </Label>
    <CollectionFilters
      activeFilter={activeCollection}
      updateCollection={methods.updateCollection}
    />
    <Label>Tags  &nbsp;| </Label>
    <TagFilters
      activeFilter={activeTags}
      methods={methods}
    />
    <Label>Price  &nbsp;| </Label>
    <PriceFilters
      activeFilter={activePriceRange}
      updatePriceRange={methods.updatePriceRange}
    />
  </Container>
)

const Container = styled.div`
  width: 100%;
  padding: 10px 0;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  background: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
  margin: 15px 0;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`
const Label = styled.p`
  color: gray;
  font-size: 14px;
  margin: 0 10px;
  white-space: nowrap;
`
