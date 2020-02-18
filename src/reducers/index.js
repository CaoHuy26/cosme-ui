import { combineReducers } from 'redux';
import { loginReducers, registerReducers } from './auth';

const allReducers = combineReducers({
  loginReducers,
  registerReducers
});

export default allReducers;