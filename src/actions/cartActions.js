import ActionTypes from './types';

const cartActions = {
  addToCart: (product) => {
    return {
      type: ActionTypes.ADD_TO_CART,
      product
    }
  }
};

export default cartActions;