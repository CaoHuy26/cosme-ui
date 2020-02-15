import { all } from 'redux-saga/effects';
import loginWatcher from './authSagas';

function* rootSaga() {
  yield all([
    loginWatcher()
  ]);
}

export default rootSaga;