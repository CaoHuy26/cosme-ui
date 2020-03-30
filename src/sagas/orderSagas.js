import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { API_URL } from 'react-native-dotenv';
import ActionTypes from '../actions/types';

function* createOrder(payload) {
  try {
    const { order } = payload;
    const res = yield axios.post(`${API_URL}/o/order`, order);
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
    const res = yield axios.get(`${API_URL}/o/u/${userId}`);
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