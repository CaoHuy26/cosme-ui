import ActionTypes from './types';

const productActions = {
  getProducts: (page) => {
    return {
      type: ActionTypes.PRODUCT_FETCH_REQUEST,
      page
    }
  }
};

export default productActions;