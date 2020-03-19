import ActionTypes from './types';

const cartActions = {
  addToCart: (product) => {
    return {
      type: ActionTypes.ADD_TO_CART,
      product
    }
  },
  increaseQuantityOrderProduct: (orderProductId) => {
    return {
      type: ActionTypes.INCREASE_QUANTITY_ORDER_PRODUCT,
      orderProductId
    }
  },
  decreaseQuantityOrderProduct: (orderProductId) => {
    return {
      type: ActionTypes.DECREASE_QUANTITY_ORDER_PRODUCT,
      orderProductId
    }
  },
  removeAllCart: () => {
    return {
      type: ActionTypes.REMOVE_ALL_CART
    }
  }
};

export default cartActions;