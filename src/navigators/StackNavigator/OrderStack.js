import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { MainOrderScreen } from '../../screens/Order';
import { PaymentScreen } from '../../screens/Order';

const OrderStack = createStackNavigator(
  {
    Order: {
      screen: MainOrderScreen
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