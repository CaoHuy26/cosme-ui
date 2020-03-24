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
      });
    }
    else {
      yield put({
        type: ActionTypes.CREATE_ORDER_FAILURE,
        error: res.data.msg
      });
    }

  }
  catch (error) {
    yield put({
      type: ActionTypes.CREATE_ORDER_FAILURE,
      error
    });
  }
};

function* createOrderWatcher() {
  yield takeEvery(ActionTypes.CREATE_ORDER_REQUEST, createOrder);
};

function* getOrderByUserId(payload) {
  try {
    const { userId } = payload;
    const orderOfUserApi = `http://localhost:3000/o/u/${userId}`;
    const res = yield axios.get(orderOfUserApi);
    // console.log(`GET ORDER OF USER: ${JSON.stringify(res.data, null, 4)}`)
    if (res.data.statusCode === 200) {
      yield put({
        type: ActionTypes.FETCH_ORDER_SUCCESS,
        payload: res.data
      });
    }
    else {
      yield put({
        type: ActionTypes.FETCH_ORDER_FAILURE,
        error: res.data.msg
      });
    }
  }
  catch (error) {
    yield put({
      type: ActionTypes.FETCH_ORDER_FAILURE,
      error
    });
  }
}

function* getOrderByUserIdWatcher() {
  yield takeEvery(ActionTypes.FETCH_ORDER_REQUEST, getOrderByUserId);
}

export {
  createOrderWatcher,
  getOrderByUserIdWatcher
};