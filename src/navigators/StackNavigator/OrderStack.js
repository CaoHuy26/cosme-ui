import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { OrderScreen } from '../../screens/MainScreen';
import { PaymentScreen } from '../../screens/Order';

const OrderStack = createStackNavigator(
  {
    Order: {
      screen: OrderScreen
    },
    Payment: {
      screen: PaymentScreen
    }
  },
  {
    initialRouteName: 'Order'
  }
);

export default OrderStack;