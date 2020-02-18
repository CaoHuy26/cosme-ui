import ActionTypes from '../../actions/types';

const initialState = {
  isRegistering: false,
  success: false,
  error: null
};

const registerReducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.USER_REGISTER_REQUEST:
      return {
        ...state,
        isRegistering: true
      }
    case ActionTypes.USER_REGISTER_SUCCESS:
      return {
        ...state,
        isRegistering: false,
        success: true
      }
    case ActionTypes.USER_REGISTER_FAILURE:
      return {
        ...state,
        isRegistering: false,
        success: false,
        error: action.error
      }
    default:
      return state
  }
};

export default registerReducers;