import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { NotificationScreen } from '../../screens/MainScreen/index.js';

const NotificationStack = createStackNavigator(
  {
    Notification: {
      screen: NotificationScreen
    }
  },
  {
    initialRouteName: 'Notification'
  }
);

export default NotificationStack;