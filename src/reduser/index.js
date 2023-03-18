import { combineReducers } from 'redux';
import { cartReduser as cart } from './cartReduser';
import { productsReducer as products } from './productreduser';
import { errorReducer as errors } from './errorReduser';
import { LoadingReduser as loading } from './loadingReduser';

export default combineReducers({
  cart,
  products,
  loading,
  errors,
});
