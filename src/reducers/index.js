import { combineReducers } from 'redux';
import { loginReducers, registerReducers } from './auth';
import productReducers from './productReducers';

const allReducers = combineReducers({
  loginReducers,
  registerReducers,
  productReducers
});

export default allReducers;