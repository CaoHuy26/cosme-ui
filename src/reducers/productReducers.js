import ActionTypes from '../actions/types';

const initialState = {
  isFetching: false,
  success: false,
  products: [],
  error: null
};

const productReducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.PRODUCT_FETCH_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case ActionTypes.PRODUCT_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        success: true,
        products: [...state.products, ...action.payload]
      }
    case ActionTypes.PRODUCT_FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        success: false,
        products: null,
        error: action.error
      }
    default:
      return state
  }
};

export default productReducers;