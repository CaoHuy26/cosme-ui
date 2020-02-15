import ActionTypes from './types';

const authActions = {
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