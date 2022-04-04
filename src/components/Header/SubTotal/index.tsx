import { useQuery } from '@apollo/client';
import {ACTIVE_ORDER} from '../../../graphql/queries'
import Loading from '../../Loading';
import Error from '../../Error';
import Presentational from './Presentational'

const SubTotal = () => {
  const {loading, error, data}  = useQuery(ACTIVE_ORDER, {fetchPolicy: 'network-only'})
  if(loading){
    return <Loading/>
  }
  if(error){
    <Error message={error.message}/>    
  }
  return(<Presentational currencyCode={data.activeOrder.currencyCode} total={data.activeOrder.total} />
  );
}

export { SubTotal as default }