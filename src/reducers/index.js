import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { loginReducers, registerReducers } from './auth';
import productReducers from './productReducers';
import cartReducers from './cartReducers';
import orderReducers from './orderReducers';

const allReducers = combineReducers({
  form: formReducer,
  loginReducers,
  registerReducers,
  productReducers,
  cartReducers,
  orderReducers
});

export default allReducers;