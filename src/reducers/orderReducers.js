import ActionTypes from '../actions/types';

const initialState = {
  isCreatingOrder: false,
  isFetching: false,
  success: false,
  order: {}, // creating
  orders: [] // fetching
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

    case ActionTypes.FETCH_ORDER_REQUEST: {
      return {
        ...state,
        success: false,
        isFetching: true,
        orders: []
      }
    }

    case ActionTypes.FETCH_ORDER_SUCCESS: {
      const { orders } = action.payload.data;
      return {
        ...state,
        success: true,
        isFetching: false,
        orders
      }
    }

    default:
      return state
  }
};

export default OrderReducers;