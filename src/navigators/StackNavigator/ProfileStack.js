import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { LoginScreen, RegisterScreen, ProfileScreen } from '../../screens/Profile';

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