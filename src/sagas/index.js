import { all } from 'redux-saga/effects';
import { loginWatcher, registerWatcher } from './authSagas';
import { getProductsWatcher } from './productSagas';
import { createOrderWatcher, getOrderByUserIdWatcher } from './orderSagas';

function* rootSaga() {
  yield all([
    loginWatcher(),
    registerWatcher(),
    getProductsWatcher(),
    createOrderWatcher(),
    getOrderByUserIdWatcher()
  ]);
}

export default rootSaga;