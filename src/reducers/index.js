import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { loginReducers, registerReducers } from './auth';
import productReducers from './productReducers';
import cartReducers from './cartReducers';
import orderReducers from './orderReducers';
import notificationReducers from './notificationReducers';

const allReducers = combineReducers({
  form: formReducer,
  loginReducers,
  registerReducers,
  productReducers,
  cartReducers,
  orderReducers,
  notificationReducers
});

export default allReducers;