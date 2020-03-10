import { combineReducers } from 'redux';
import { loginReducers, registerReducers } from './auth';
import productReducers from './productReducers';
import cartReducers from './cartReducers';

const allReducers = combineReducers({
  loginReducers,
  registerReducers,
  productReducers,
  cartReducers
});

export default allReducers;