import ActionTypes from '../actions/types';

const initialState = {
  isCreating: false,
  isFetching: false,
  success: false,
  notifications: []
};

const notificationReducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_NOTIFICATION_REQUEST:
      return {
        ...state,
        isCreating: true
      }
    case ActionTypes.CREATE_NOTIFICATION_SUCCESS:
      return {
        ...state,
        isCreating: false,
        success: true
      }
    case ActionTypes.CREATE_NOTIFICATION_FAILURE:
      return {
        ...state,
        isCreating: false,
        success: false
      }

    case ActionTypes.FETCH_NOTIFICATIONS_REQUEST:
      return {
        ...state,
        isCreating: false,
        success: false,
        isFetching: true
      }
    case ActionTypes.FETCH_NOTIFICATIONS_SUCCESS:
      const { notifications } = action.payload.data;
      return {
        ...state,
        isCreating: false,
        isFetching: false,
        success: true,
        notifications
      }
    case ActionTypes.FETCH_NOTIFICATIONS_FAILURE:
      return {
        ...state,
        isCreating: false,
        isFetching: false,
        success: false,
        notifications: null
      }

    default:
      return state
  }
};

export default notificationReducers;