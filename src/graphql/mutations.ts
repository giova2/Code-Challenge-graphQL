// Here we put mutations. Remove next line
import { gql } from '@apollo/client';
import {
  ORDER_FRAGMENT,
  INSUFFICIENT_STOCK_ERROR_FRAGMENT,
  ORDER_MODIFICATION_ERROR_FRAGMENT,
  ORDER_LIMIT_ERROR_FRAGMENT,
  NEGATIVE_QUANTITY_ERROR_FRAGMENT,
  Order,
  InsufficientStockError,
  OrderModificationError,
  OrderLimitError,
  NegativeQuantityError
  } from './fragments'
export const ADD_ITEM_TO_ORDER = gql`
  mutation addItemToOrder($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity){
      ... on Order {
        ...orderFragment
      }
      ... on InsufficientStockError {
        ...insufficientStockErrorFragment
      }
      ... on OrderModificationError {
        ...orderModificationErrorFragment
      }
      ... on OrderLimitError {
        ...orderLimitErrorFragment
      }
      ... on NegativeQuantityError {
        ...negativeQuantityErrorFragment
      }
    }
  }
  ${ORDER_FRAGMENT}
  ${INSUFFICIENT_STOCK_ERROR_FRAGMENT}
  ${ORDER_MODIFICATION_ERROR_FRAGMENT}
  ${ORDER_LIMIT_ERROR_FRAGMENT}
  ${NEGATIVE_QUANTITY_ERROR_FRAGMENT}
`