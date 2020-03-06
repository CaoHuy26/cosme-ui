import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { OrderScreen } from '../../screens/MainScreen/index.js';

const OrderStack = createStackNavigator(
  {
    Order: {
      screen: OrderScreen
    }
  },
  {
    initialRouteName: 'Order'
  }
);

export default OrderStack;