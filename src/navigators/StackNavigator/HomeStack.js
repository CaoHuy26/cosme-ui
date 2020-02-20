import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen } from '../../screens/MainScreen.js/index.js';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    }
  },
  {
    initialRouteName: 'Home'
  }
);

export default HomeStack;