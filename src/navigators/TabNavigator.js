import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { HomeScreen, NotificationScreen, OrderScreen, ProfileScreen } from '../screens/MainScreen.js';

import { createBottomTabNavigator } from 'react-navigation-tabs';

const RouteConfigs = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'HOME',
      tabBarIcon: () => (
        <Icon name='ios-home' size={24}/>
      )
    }
  },
  Notification: {
    screen: NotificationScreen,
    navigationOptions: {
      title: 'NOTIFICATION',
      tabBarIcon: () => (
        <Icon name='ios-notifications' size={24}/>
      )
    }
  },
  Order: {
    screen: OrderScreen,
    navigationOptions: {
      title: 'ORDER',
      tabBarIcon: () => (
        <Icon name='ios-cart' size={24}/>
      )
    }
  },
  Profile: {
    screen: ProfileScreen,
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
