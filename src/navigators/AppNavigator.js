import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { LoginScreen, RegisterScreen } from '../screens/Auth';

import TabNavigator from './TabNavigator';

const StackNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  Register: {
    screen: RegisterScreen
  }
});

const AppNavigator = createAppContainer(TabNavigator);

export default AppNavigator;