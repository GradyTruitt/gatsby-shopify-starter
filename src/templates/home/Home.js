import React from 'react'
import styled from 'styled-components'

export default ({ heading, subheading }) => (
  <Container>
    <Heading>{heading}</Heading>
    <Subheading>{subheading}</Subheading>
  </Container>
)
const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #edf2f5;
`
const Heading = styled.h1`
  margin: 0 0 15px;
  font-size: 40px;
  line-height: 40px;
  font-weight: 600;
  color: #5239f0;
  font-family: ${props => props.theme.fontFamily};
`
const Subheading = styled.p`
  margin: 0;
  font-size: 20px;
  line-height: 20px;
  font-weight: 200;
  color: #a39fc0;
  font-family: ${props => props.theme.fontFamily};
`
