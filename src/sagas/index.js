import { all } from 'redux-saga/effects';
import { loginWatcher, registerWatcher } from './authSagas';
import { getProductsWatcher } from './productSagas';
import { createOrderWatcher, getOrderByUserIdWatcher } from './orderSagas';
import { createNotificationWatcher, getNotificationsByUserIdWatcher } from './notificationSagas';

function* rootSaga() {
  yield all([
    loginWatcher(),
    registerWatcher(),
    getProductsWatcher(),
    createOrderWatcher(),
    getOrderByUserIdWatcher(),
    createNotificationWatcher(),
    getNotificationsByUserIdWatcher()
  ]);
}

export default rootSaga;