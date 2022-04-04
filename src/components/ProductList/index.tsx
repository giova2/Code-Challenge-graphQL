import { useQuery } from '@apollo/client';
import React from 'react'
import { PRODUCT_LIST } from '../../graphql/queries';
import Error from '../Error';
import Loading from '../Loading';
import Presentational from './Presentational'

const ProductList: React.FC = () => {
  const { loading, error, data } = useQuery(PRODUCT_LIST)
  if(loading){
    return <Loading/>
  }
  if(error){
    <Error message={error.message}/>    
  }
  const { products: {items, totalItems}} = data
  return(<Presentational items={items} totalItems={totalItems} />
  );
}

export default ProductList
