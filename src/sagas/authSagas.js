import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import ActionTypes from '../actions/types';


function* login(data) {
  try {
    const user = {
      email: data.payload.email,
      password: data.payload.password
    };
    const res = yield axios.post('http://localhost:3000/auth/login', user);
    console.log(`Response: ${JSON.stringify(res.data)}`)
    if (res.data.statusCode === 200) {
      yield put({
        type: ActionTypes.USER_LOGIN_SUCCESS,
        isLoggedIn: true,
        payload: res.data
      })
    }
    else {
      yield put({
        type: ActionTypes.USER_LOGIN_FAILURE,
        error: res.data.message
      })
    }
  }
  catch (err) {
    yield put({
      type: ActionTypes.USER_LOGIN_FAILURE,
      error: err
    })
  }
};

function* loginWatcher() {
  yield takeLatest(ActionTypes.USER_LOGIN_REQUEST, login)
}

function* register(data) {
  try {
    const user = {
      email: data.payload.email,
      password: data.payload.password
    };
    const res = yield axios.post('http://localhost:3000/auth/register', user);
    console.log(`Response: ${JSON.stringify(res.data)}`)
    if (res.data.statusCode === 200) {
      yield put({
        type: ActionTypes.USER_REGISTER_SUCCESS
      })
    }
    else {
      yield put({
        type: ActionTypes.USER_REGISTER_FAILURE,
        error: res.data.message
      })
    }
  }
  catch (err) {
    yield put({
      type: ActionTypes.USER_LOGIN_FAILURE,
      error: err
    })
  }
}

function* registerWatcher() {
  yield takeLatest(ActionTypes.USER_REGISTER_REQUEST, register)
}

export {
  loginWatcher,
  registerWatcher
}