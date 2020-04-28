import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { API_URL } from 'react-native-dotenv';
import ActionTypes from '../actions/types';

function* getProducts(pageRequest) {
  try {
    const { page, query } = pageRequest;
    let productApi = `${API_URL}/p/products?page=${page}`;
    // if (query) {
    //   const { categoryId } = query;
    //   if (categoryId) {
    //     productApi += `&categoryId=${categoryId}`;
    //   }
    // }
    console.log(`GET 👉 ${productApi}`);
    
    const res = yield axios.get(productApi);
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
  yield takeEvery(ActionTypes.PRODUCT_FETCH_REQUEST, getProducts);
}

export {
  getProductsWatcher
};