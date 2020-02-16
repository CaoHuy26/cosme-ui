import ActionTypes from '../../actions/types';

const initialState = {
  user: null,
  isLoading: false,
  isLoggedIn: false,
  error: null
};

const loginReducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.USER_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case ActionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isLoggedIn: action.isLoggedIn,
        error: null
      }
    case ActionTypes.USER_LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        isLoading: false,
        isLoggedIn: false,
        error: action.error
      }


    case ActionTypes.USER_LOGOUT:
      return initialState;
      
    default:
      return state;
  }
};

export default loginReducers;