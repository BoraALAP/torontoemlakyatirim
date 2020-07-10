import React from 'react'
import styled from 'styled-components'

const Container= styled.button`
  padding: 24px 48px;
  background-color: ${props => props.theme.color.accent};
  color: ${props => props.theme.color.white};
  font-size: 1em;
  
  max-width: 450px;
  font-weight: ${props => props.theme.font.weight.semibold};
  border: none;
`

const Button = (props) => {
  return (
    <Container>
      {props.text}
    </Container>
  )
}

export default Button
