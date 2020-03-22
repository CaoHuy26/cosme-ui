import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { OrderListScreen } from '../../screens/Order';
import { PaymentScreen } from '../../screens/Order';

const OrderStack = createStackNavigator(
  {
    Order: {
      screen: OrderListScreen
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