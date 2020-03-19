import ActionTypes from '../actions/types';

const initialState = {
  isCreatingOrder: false,
  success: false,
  order: {}
};

const OrderReducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_ORDER_REQUEST: {
      return {
        ...state,
        isCreatingOrder: true
      }
    }
    case ActionTypes.CREATE_ORDER_SUCCESS: {
      const { order } = action.payload.data;
      return {
        ...state,
        isCreatingOrder: false,
        success: true,
        order
      }
    }

    default:
      return state
  }
};

export default OrderReducers;