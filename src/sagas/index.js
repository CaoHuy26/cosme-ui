import { all } from 'redux-saga/effects';
import { loginWatcher, registerWatcher } from './authSagas';
import { getProductsWatcher } from './productSagas';

function* rootSaga() {
  yield all([
    loginWatcher(),
    registerWatcher(),
    getProductsWatcher()
  ]);
}

export default rootSaga;