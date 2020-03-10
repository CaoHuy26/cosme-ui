import ActionTypes from '../actions/types';

const initialState = {
  productsInCart: [],
  total: 0
};

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      console.log(`Add to 🛒: ${action.product.name}`)
      const isExisted = state.productsInCart.find(item => item.id === action.product.id);
      // if product is existed, state just increase total
      if (isExisted) {
        return {
          ...state,
          total: state.total + 1
        }
      }
      else {
        return {
          ...state,
          productsInCart: [...state.productsInCart, action.product],
          total: state.total + 1
        }
      }
      // TODO: Case REMOVE_TO_CART
    default:
      return state
  }
};

export default cartReducers;