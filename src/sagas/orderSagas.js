import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import ActionTypes from '../actions/types';

function* createOrder(payload) {
  try {
    const { order } = payload;
    const orderApi = 'http://localhost:3000/o/order';
    const res = yield axios.post(orderApi, order);
    if (res.data.statusCode === 200) {
      yield put({
        type: ActionTypes.CREATE_ORDER_SUCCESS,
        payload: res.data
      })
    }
    else {
      yield put({
        type: ActionTypes.CREATE_ORDER_FAILURE,
        error: res.data.msg
      })
    }

  }
  catch (error) {
    yield put({
      type: ActionTypes.CREATE_ORDER_FAILURE,
      error
    })
  }
};

function* createOrderWatcher() {
  yield takeEvery(ActionTypes.CREATE_ORDER_REQUEST, createOrder);
};

export {
  createOrderWatcher
};