import ActionTypes from './types';

const productActions = {
  getProducts: (page, query) => {
    return {
      type: ActionTypes.PRODUCT_FETCH_REQUEST,
      page,
      query
    }
  }
};

export default productActions;