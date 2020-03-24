import ActionTypes from './types';

const orderActions = {
  createOrder: (order) => {
    return {
      type: ActionTypes.CREATE_ORDER_REQUEST,
      order
    }
  },
  getOrderByUserId: (userId) => {
    return {
      type: ActionTypes.FETCH_ORDER_REQUEST,
      userId
    }
  }
};

export default orderActions;