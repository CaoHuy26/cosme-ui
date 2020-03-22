import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { NotificationListScreen } from '../../screens/Notification';

const NotificationStack = createStackNavigator(
  {
    Notification: {
      screen: NotificationListScreen
    }
  },
  {
    initialRouteName: 'Notification'
  }
);

export default NotificationStack;