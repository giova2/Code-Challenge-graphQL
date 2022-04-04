import React from 'react'
import { PresentationalProps } from './types'
import styled from 'styled-components'

const StyledSubtotal = styled.span`
  font-weight: 800;
  font-family: sans-serif;
  padding: 0.25rem;
`

const Presentational: React.FC<PresentationalProps> = ({currencyCode, total}) => {
  return(<StyledSubtotal>Order Subtotal: {currencyCode} {total}</StyledSubtotal>
  );
}

export { Presentational as default }