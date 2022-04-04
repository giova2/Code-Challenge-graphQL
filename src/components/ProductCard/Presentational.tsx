import React from 'react'
import { PresentationalProps } from './types'
import styled from 'styled-components'
import Loading from '../Loading'

const ProductCard = styled.div`
  display:flex;
  flex-direction:column;
  width:180px;
  background-color: #aa3333aa;
  padding: 0.5rem;
  margin:0.25rem;
`
const StyledImg = styled.img`
  width: 180px;
  height:180px;
  object-fit:cover;
`
const StyledDescription = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`
const StyledPrice = styled.h3`
`
const StyledButton = styled.button`
  padding:0.5rem;
  background-color: green;
  cursor: pointer;
  &:hover{
    background-color: #005500;
    
  }
`

const Presentational: React.FC<PresentationalProps> = ({
  description,
  assets,
  price,
  currencyCode,
  loading,
  onAddToCart}) => {
  return(<>
    {loading && <Loading cover />}
    <ProductCard>
      <StyledImg src={Array.isArray(assets) && assets.length > 0 ? assets[0].source : ''} alt="picture" />
      <StyledDescription title={description}>{description}</StyledDescription>
      <StyledPrice>{`${currencyCode} ${price}`}</StyledPrice>
      <StyledButton onClick={onAddToCart}>Add to Cart</StyledButton>
    </ProductCard>
  </>
  );
}

export { Presentational as default }