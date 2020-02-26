import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import ActionTypes from '../actions/types';

function* getProducts(pageRequest) {
  try {
    const { page } = pageRequest;
    const res = yield axios.get(`http://localhost:3000/p/products?page=${page}`);
    const { statusCode, data } = res.data;
    if (statusCode === 200) {
      yield put({
        type: ActionTypes.PRODUCT_FETCH_SUCCESS,
        payload: data
      });
    }
    else {
      yield put({
        type: ActionTypes.PRODUCT_FETCH_FAILURE,
        error: res.data.msg
      });
    }
  }
  catch (error) {
    yield put({
      type: ActionTypes.PRODUCT_FETCH_FAILURE,
      error
    })
  }
}

function* getProductsWatcher() {
  yield takeLatest(ActionTypes.PRODUCT_FETCH_REQUEST, getProducts);
}

export {
  getProductsWatcher
};