import ActionTypes from '../actions/types';

const initialState = {
  productsInCart: [],
  total: 0
};

/**
 * @param {object} product 
 * @param {string} id
 * @param {number} quantityOrder = 1
 */

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      console.log(`Add to 🛒: ${action.product.name}`)
      const isProductExisted = state.productsInCart.find(item => item.id === action.product.id);
      // if product is existed, increase quantityOrder of this product
      if (isProductExisted) {
        return {
          ...state,
          total: state.total + 1,
          productsInCart: state.productsInCart.map(
            product => product.id === isProductExisted.id ? {
              ...product,
              quantityOrder: product.quantityOrder + 1
            }
            : product
          )
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

    case ActionTypes.INCREASE_QUANTITY_ORDER_PRODUCT:
      return {
        ...state,
        total: state.total + 1,
        productsInCart: state.productsInCart.map(
          product => product.id === action.orderProductId ? {
            ...product,
            quantityOrder: product.quantityOrder + 1
          }
          : product
        )
      }

    case ActionTypes.DECREASE_QUANTITY_ORDER_PRODUCT:
      return {
        ...state,
        total: state.total > state.productsInCart.length ? state.total - 1 : state.productsInCart.length,
        productsInCart: state.productsInCart.map(
          product => product.id === action.orderProductId ? {
            ...product,
            quantityOrder: product.quantityOrder > 1 ? product.quantityOrder - 1 : 1
          }
          : product
        )
      }

    default:
      return state
  }
};

export default cartReducers;