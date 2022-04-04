import { useMutation } from '@apollo/client'
import { ADD_ITEM_TO_ORDER } from '../../graphql/mutations';
import {ACTIVE_ORDER} from '../../graphql/queries'
import Presentational from './Presentational'
import { ProductCardProps } from './types'
import {UpdateOrderItemsResult} from '../../graphql/fragments'

const ProductCard:React.FC<ProductCardProps> = ({id, ...props}) => {
  const [mutateFunction, {loading}] = useMutation<UpdateOrderItemsResult>(ADD_ITEM_TO_ORDER, {
    refetchQueries: [{ query: ACTIVE_ORDER }],
  });
  const onAddToCart = () =>{
    mutateFunction({ variables: { productVariantId: id, quantity: 1 } })
  }
  return(<Presentational loading={loading} onAddToCart={onAddToCart} {...props} />);
}

export { ProductCard as default }