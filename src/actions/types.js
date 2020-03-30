const ActionTypes = {
  USER_LOGIN_REQUEST: 'USER_LOGIN_REQUEST',
  USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
  USER_LOGIN_FAILURE: 'USER_LOGIN_FAILURE',

  USER_REGISTER_REQUEST: 'USER_REGISTER_REQUEST',
  USER_REGISTER_SUCCESS: 'USER_REGISTER_SUCCESS',
  USER_REGISTER_FAILURE: 'USER_REGISTER_FAILURE',

  USER_LOGOUT: 'USER_LOGOUT',

  // Product
  PRODUCT_FETCH_REQUEST: 'PRODUCT_FETCH_REQUEST',
  PRODUCT_FETCH_SUCCESS: 'PRODUCT_FETCH_SUCCESS',
  PRODUCT_FETCH_FAILURE: 'PRODUCT_FETCH_FAILURE',

  // Cart
  ADD_TO_CART: 'ADD_TO_CART',
  INCREASE_QUANTITY_ORDER_PRODUCT: 'INCREASE_QUANTITY_ORDER_PRODUCT',
  DECREASE_QUANTITY_ORDER_PRODUCT: 'DECREASE_QUANTITY_ORDER_PRODUCT',
  REMOVE_ALL_CART: 'REMOVE_ALL_CART',

  // ORDER
  CREATE_ORDER_REQUEST: 'CREATE_ORDER_REQUEST',
  CREATE_ORDER_SUCCESS: 'CREATE_ORDER_SUCCESS',
  CREATE_ORDER_FAILURE: 'CREATE_ORDER_FAILURE',
  
  FETCH_ORDER_REQUEST: 'FETCH_ORDER_REQUEST',
  FETCH_ORDER_SUCCESS: 'FETCH_ORDER_SUCCESS',
  FETCH_ORDER_FAILURE: 'FETCH_ORDER_FAILURE',

  // Notification
  CREATE_NOTIFICATION_REQUEST: 'CREATE_NOTIFICATION_REQUEST',
  CREATE_NOTIFICATION_SUCCESS: 'CREATE_NOTIFICATION_SUCCESS',
  CREATE_NOTIFICATION_FAILURE: 'CREATE_NOTIFICATION_FAILURE',

  FETCH_NOTIFICATIONS_REQUEST: 'FETCH_NOTIFICATIONS_REQUEST',
  FETCH_NOTIFICATIONS_SUCCESS: 'FETCH_NOTIFICATIONS_SUCCESS',
  FETCH_NOTIFICATIONS_FAILURE: 'FETCH_NOTIFICATIONS_FAILURE'
};

export default ActionTypes;