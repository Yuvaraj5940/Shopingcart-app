import { combineReducers } from 'redux';
import { cartReduser as cart } from './cartReduser';
import { errorReducer as error } from './errorReduser';
import { LoadingReduser as load } from './loadingReduser';
import { productsReducer as product } from './productreduser';

export default combineReducers({
  cart,
  error,
  load,
  product,
});
