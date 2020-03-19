import { all } from 'redux-saga/effects';
import { loginWatcher, registerWatcher } from './authSagas';
import { getProductsWatcher } from './productSagas';
import { createOrderWatcher } from './orderSagas';

function* rootSaga() {
  yield all([
    loginWatcher(),
    registerWatcher(),
    getProductsWatcher(),
    createOrderWatcher()
  ]);
}

export default rootSaga;