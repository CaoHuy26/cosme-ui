import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { ProfileScreen } from '../../screens/MainScreen/index.js';
import { RegisterScreen, LoginScreen } from '../../screens/Auth';

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen
    },
    Register: {
      screen: RegisterScreen
    },
    Login: {
      screen: LoginScreen
    }
  },
  {
    // initialRouteName: 'Register'
    initialRouteName: 'Login'
  }
);

export default ProfileStack;