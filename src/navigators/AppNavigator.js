import React from 'react';
import { createAppContainer } from 'react-navigation';

import TabNavigator from './TabNavigator';

const AppNavigator = createAppContainer(TabNavigator);

export default AppNavigator;