import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeStack from './StackNavigator/HomeStack';
import NotificationStack from './StackNavigator/NotificationStack.js';
import OrderStack from './StackNavigator/OrderStack';
import ProfileStack from './StackNavigator/ProfileStack';

const RouteConfigs = {
  Home: {
    screen: HomeStack ,
    navigationOptions: {
      title: 'HOME',
      tabBarIcon: () => (
        <Icon name='ios-home' size={24}/>
      )
    }
  },
  Notification: {
    screen: NotificationStack,
    navigationOptions: {
      title: 'NOTIFICATION',
      tabBarIcon: () => (
        <Icon name='ios-notifications' size={24}/>
      )
    }
  },
  Order: {
    screen: OrderStack,
    navigationOptions: {
      title: 'ORDER',
      tabBarIcon: () => (
        <Icon name='ios-cart' size={24}/>
      )
    }
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      title: 'PROFILE',
      tabBarIcon: () => (
        <Icon name='ios-person' size={24}/>
      )
    }
  },
};

const TabNavigatorConfigs = {
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    style: {
      backgroundColor: 'white',
    },
  },
};

const TabNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfigs);
export default TabNavigator;
