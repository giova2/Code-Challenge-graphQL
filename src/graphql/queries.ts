// Here we put queries. Remove next line
import { gql } from '@apollo/client';
import { ORDER_FRAGMENT } from './fragments';


export const PRODUCT_LIST = gql`
  query ProductList {
    products{
      items {
        id
        description
        assets {
          id
          type
          width
          height
          source
        }
        variants {
          price
          currencyCode
          priceWithTax
        }
      }
      totalItems
    }
  }
`;


export const ACTIVE_ORDER = gql`
  query activeOrder {
    activeOrder {
      ...orderFragment
    }
  }
  ${ORDER_FRAGMENT}
`