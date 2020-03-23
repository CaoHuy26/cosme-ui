import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { MainOrderScreen, PaymentScreen, PaymentReportScreen, OrderDetailScreen } from '../../screens/Order';

const OrderStack = createStackNavigator(
  {
    MainOrder: {
      screen: MainOrderScreen,
      navigationOptions: {
        // Config Header title
        title: 'Order' 
      }
    },
    Payment: {
      screen: PaymentScreen
    },
    PaymentReport: {
      screen: PaymentReportScreen
    },
    OrderDetail: {
      screen: OrderDetailScreen
    }
  },
  {
    initialRouteName: 'MainOrder'
  }
);

export default OrderStack;