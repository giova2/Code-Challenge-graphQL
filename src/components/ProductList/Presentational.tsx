import React from 'react'
import ProductCard from '../ProductCard';
import { PresentationalProps } from './types'
import styled from 'styled-components'

const StyledProductList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const TotalItems = styled.h5`
  text-align: center;
`


const Presentational: React.FC<PresentationalProps> = ({items, totalItems}) => {
  return(
  <>
    <TotalItems>{totalItems} results</TotalItems>
    <StyledProductList>
      {items.map(({id, description, assets, variants}) => {
        const {price, currencyCode} = variants[0]
        return <ProductCard key={id} id={id}
          description={description}
          assets={assets} 
          price={price} 
          currencyCode={currencyCode}/>
      })}
    </StyledProductList>
  </>
  );

}

export default Presentational