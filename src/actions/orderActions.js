import ActionTypes from './types';

const orderActions = {
  createOrder: (order) => {
    return {
      type: ActionTypes.CREATE_ORDER_REQUEST,
      order
    }
  }
};

export default orderActions;