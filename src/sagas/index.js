import { all } from 'redux-saga/effects';
import { loginWatcher, registerWatcher } from './authSagas';

function* rootSaga() {
  yield all([
    loginWatcher(),
    registerWatcher()
  ]);
}

export default rootSaga;