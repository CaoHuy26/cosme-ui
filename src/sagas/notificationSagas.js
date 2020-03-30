import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { API_URL } from 'react-native-dotenv';
import ActionTypes from '../actions/types';

function* createNotification(payload) {
  try {
    const { notification } = payload;
    const res = yield axios.post(`${API_URL}/notification`, notification);
    if (res.data.statusCode === 200) {
      yield put({
        type: ActionTypes.CREATE_NOTIFICATION_SUCCESS,
        payload: res.data
      });
    }
    else {
      yield put({
        type: ActionTypes.CREATE_NOTIFICATION_FAILURE,
        error: res.data.msg
      });
    }
  }
  catch (error) {
    yield put({
      type: ActionTypes.CREATE_NOTIFICATION_FAILURE,
      error
    });
  }
};

function* createNotificationWatcher() {
  yield takeLatest(ActionTypes.CREATE_NOTIFICATION_REQUEST, createNotification);
};

function* getNotificationsByUserId(payload) {
  try {
    const { userId } = payload;
    const res = yield axios.get(`${API_URL}/notification/${userId}`);
    // console.log(`GET NOTIFICATION OF USER: ${JSON.stringify(res.data, null, 4)}`)
    if (res.data.statusCode === 200) {
      yield put({
        type: ActionTypes.FETCH_NOTIFICATIONS_SUCCESS,
        payload: res.data
      });
    }
    else {
      yield put({
        type: ActionTypes.FETCH_NOTIFICATIONS_FAILURE,
        error: res.data.msg
      });
    }
  }
  catch (error) {
    yield put({
      type: ActionTypes.FETCH_NOTIFICATIONS_FAILURE,
      error
    })
  }
};

function* getNotificationsByUserIdWatcher() {
  yield takeEvery(ActionTypes.FETCH_NOTIFICATIONS_REQUEST, getNotificationsByUserId);
};

export {
  createNotificationWatcher,
  getNotificationsByUserIdWatcher
};