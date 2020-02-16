import ActionTypes from './types';

const authActions = {
  register: (user) => {
    return {
      type: ActionTypes.USER_REGISTER_REQUEST,
      payload: user
    }
  },
  login: (user) => {
    return {
      type: ActionTypes.USER_LOGIN_REQUEST,
      payload: user
    }
  },
  logout: () => {
    return {
      type: ActionTypes.USER_LOGOUT,
      isLoggedIn: false
    }
  }
}

export default authActions;