import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import TabNavigator from './TabNavigator';
import { LoginScreen, RegisterScreen } from '../screens/Auth';

const StackNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator
  },
  Register: {
    screen: RegisterScreen
  }
});

const AppNavigator = createAppContainer(StackNavigator);

export default AppNavigator;