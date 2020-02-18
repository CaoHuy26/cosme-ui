import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import { LoginScreen, RegisterScreen } from '../screens/Auth';
import TabNavigator from './TabNavigator';

const StackNavigator = createStackNavigator({
  hihi: {
    screen: TabNavigator
  },
  Register: {
    screen: RegisterScreen
  }
});

export default StackNavigator;