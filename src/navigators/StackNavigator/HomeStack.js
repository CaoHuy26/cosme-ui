import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen } from '../../screens/MainScreen.js/index.js';
import { ProductDetailScreen, NewsScreen, CategoryScreen } from '../../screens/Home';

const headerLeft = (
  <TouchableOpacity
    onPress={() => alert('Click menu')}
  >
    <Icon 
      name='ios-menu' 
      size={24}
      style={{
        paddingHorizontal: 20
      }}
    />
  </TouchableOpacity>
);

const headerRight = (
  <View style={{
    flexDirection: 'row',
    paddingHorizontal: 20
  }}>
    <View style={{paddingRight: 8}}>
      <TouchableOpacity
        onPress={() => alert('Click cart')}
      >
        <Icon 
          name='ios-cart' 
          size={24}
          style={{}}
        />
      </TouchableOpacity>
    </View>

    <View style={{paddingLeft: 8}}>
      <TouchableOpacity
        onPress={() => alert('Click person')}
      >
      <Icon 
        name='ios-person'
        size={24}
      />
    </TouchableOpacity>
    </View>
  </View>
);

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerLeft: () => headerLeft,
        headerRight: () => headerRight
      }
    },
    ProductDetail: {
      screen: ProductDetailScreen
    },
    News: {
      screen: NewsScreen
    },
    Category: {
      screen: CategoryScreen
    }
  },
  {
    initialRouteName: 'Home'
  }
);

export default HomeStack;