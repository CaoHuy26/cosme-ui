import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { ProfileScreen } from '../../screens/MainScreen/index.js';
import { RegisterScreen } from '../../screens/Auth';

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen
    },
    Register: {
      screen: RegisterScreen
    }
  },
  {
    initialRouteName: 'Profile'
  }
);

export default ProfileStack;